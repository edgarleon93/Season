import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/userRoutes';

const app = express();

// install cross env pour pkg.json

// if (process.env.NODE_ENV === 'development') {
//   config({ path: `./.env.${process.env.NODE_ENV}` });
// }

// "start:build": "node NODE_ENV=production ./dist/index.js",
    // "dev": "nodemon  NODE_ENV=development ./src/index.ts",
    // "prod": "nodemon ./src/index.ts"

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