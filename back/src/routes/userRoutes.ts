import express, { Router } from 'express';
import {  register,
          login,
          logout,
          forgotPassword,
          resetPassword,
          getAllUsers,
          getUserById,
          updateUserById,
          deleteUserById,
          updateProfilePic
        } from '../controllers/userControllers';

import upload from '../config/multerConfig';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router: Router = express.Router();

// POST /register 
router.post('/register', register);

// POST /login
router.post('/login', login);

// POST /logout
router.post('/logout', isAuthenticated, logout);

// POST /forgot-password
router.post('/forgot-password', forgotPassword);

// POST /reset-password
router.post('/reset-password/:id/:resetPasswordToken', resetPassword);

// GET /users/verify
// Verifier que l'utilisateur est connecté

// GET /all
router.get('/all', getAllUsers);

// GET /user/:id
router.get('/user/:id', getUserById);

// PUT /:id
router.put('/modify/:id', isAuthenticated, updateUserById);

// PUT /profile-pic/:id
router.put('/profile-pic/:id', isAuthenticated, upload.single('profilePic'), updateProfilePic);

// DELETE /:id
router.delete('/delete/:id', isAuthenticated, deleteUserById);

export default router;