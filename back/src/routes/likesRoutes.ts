import Express, { Router } from 'express';

import {  createNewLike,
          getAllLikes,
          getLikesByPostId,
          updateLikeById,
          deleteLikeById
        } from '../controllers/likesControllers';

const router: Router = Express.Router();

// POST /likes
router.post('/likes', createNewLike);

// GET /all/likes
router.get('/all/likes', getAllLikes);

// GET /likes/:postId
router.get('/likes/:postId', getLikesByPostId);

// PUT /likes/:id
router.put('/likes/:id', updateLikeById);

// DELETE /likes/:id
router.delete('/likes/:id', deleteLikeById);

export default router;