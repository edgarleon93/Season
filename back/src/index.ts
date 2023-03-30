import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/userRoutes';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`), // .env.development || .env.test
    debug: true,
    override: true
  })
} else {
  dotenv.config({
    path: path.join(__dirname, `../.env`),
    override: true
  })
}


console.log('DB_URL', process.env.DB_URL);
console.log('ENVIRONMENT', process.env.ENVIRONMENT);
console.log('FRONTEND_URL', process.env.FRONTEND_URL);
console.log('BACKEND_URL', process.env.BACKEND_URL);

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userRoutes);

const PORT: number = Number(process.env.PORT);

mongoose.connect(process.env.DB_URL!);

mongoose.connection.on('error', (error: string) => {
  console.error(error);
});

mongoose.connection.once('open', () => {
  console.log('🌱 Connected to MongoDB');

  app.listen(PORT, () => {
    console.log(`🚀 Server ready on port ${PORT}`);
  });
});

export default app;