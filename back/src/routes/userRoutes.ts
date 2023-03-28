import express, { Router } from 'express';
import { register, 
         login,
         forgotPassword,
         resetPassword,
         getAllUsers, 
         getUserById, 
         updateUserById, 
         deleteUserById 
        } from '../controllers/userControllers';

const router: Router = express.Router();

// POST /api/register
router.post('/register', register);

// POST /api/login
router.post('/login', login);

// POST /api/forgot-password
router.post('/forgot-password', forgotPassword);

//POST /api/reset-password
router.post('/reset-password/:id/:resetPasswordToken', resetPassword);

// GET /api/all
router.get('/all', getAllUsers);

// GET /api/user/:id
router.get('/user/:id', getUserById);

// PUT /api/:id
router.put('/user/:id', updateUserById);

// DELETE /api/:id
router.delete('/user/:id', deleteUserById);

export default router;
