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

// POST /register
router.post('/register', register);

// POST /login
router.post('/login', login);

// POST /forgot-password
router.post('/forgot-password', forgotPassword);

//POST /reset-password
router.post('/reset-password/:id/:resetPasswordToken', resetPassword);

// GET /all
router.get('/all', getAllUsers);

// GET /user/:id
router.get('/user/:id', getUserById);

// PUT /:id
router.put('/modify/:id', updateUserById);

// PUT /profile-pic/:id
router.put('/profile-pic/:id', upload.single('profilePic'), updateProfilePic);

// DELETE /:id
router.delete('/delete/:id', deleteUserById);

export default router;