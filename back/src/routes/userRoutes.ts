import express, { Router } from 'express';
import { register, login, getAllUsers, getUserById, deleteUserById } from '../controllers/userControllers';

const router: Router = express.Router();

// POST /api/register
router.post('/register', register);

// POST /api/login
router.post('/login', login);

// GET /api/all
router.get('/all', getAllUsers);

// GET /api/:id
router.get('/:id', getUserById);

// DELETE /api/:id
router.delete('/:id', deleteUserById);

export default router;
