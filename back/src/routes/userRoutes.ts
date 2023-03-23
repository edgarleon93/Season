import express, { Router } from 'express';
import { register, login, getAllUsers, getUserById, updateUserById, deleteUserById } from '../controllers/userControllers';

const router: Router = express.Router();

// POST /api/register
router.post('/register', register);

// POST /api/login
router.post('/login', login);

// GET /api/all
router.get('/all', getAllUsers);

// GET /api/user/:id
router.get('/user/:id', getUserById);

// PUT /api/:id
router.put('/user/:id', updateUserById);

// DELETE /api/:id
router.delete('/user/:id', deleteUserById);

export default router;
