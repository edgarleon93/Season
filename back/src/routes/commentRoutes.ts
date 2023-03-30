import Express, { Router } from 'express';

import {  createNewComment,
          getAllCommentByPostId,
          updateCommentById,
          deleteCommentById
        } from '../controllers/commentControllers';

const router: Router = Express.Router();

// POST /comments
router.post('/comments', createNewComment);

// GET /comments
router.get('/comments', getAllCommentByPostId);

// PUT /comments/:id
router.put('/comments/:id', updateCommentById);

// DELETE /comments/:id
router.delete('/comments/:id', deleteCommentById);

export default router;