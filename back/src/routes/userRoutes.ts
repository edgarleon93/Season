import express, { Router } from 'express';
import { register,
         login,
         forgotPassword,
         resetPassword,
         getAllUsers,
         getUserById,
         updateUserById,
         deleteUserById,
         updateProfilePic
        } from '../controllers/userControllers';
import upload from '../config/multerConfig';

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
router.put('/modify/:id', updateUserById);

// PUT /api/profile-pic/:id
router.put('/profile-pic/:id', upload.single('profilePic'), updateProfilePic);

// DELETE /api/:id
router.delete('/delete/:id', deleteUserById);

export default router;