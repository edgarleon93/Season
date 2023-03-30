import Express, { Router } from 'express';

import {  createNewSubscribe,
          getAllSubscribes,
          getSubscribeById,
          getSubscribesByUserId,
          updateSubscribeById,
          deleteSubscribeById
        } from '../controllers/subscribeControllers';

const router: Router = Express.Router();

// POST /subscribe
router.post('/subscribe', createNewSubscribe);

// GET /all/subscribe
router.get('/all/subscribe', getAllSubscribes);

// GET /subscribe/:id
router.get('/subscribe/:id', getSubscribeById);

// GET /users/:userId/subscribe
router.get('/users/:userId/subscribe', getSubscribesByUserId);

// PUT /subscribe/:id
router.put('/subscribe/:id', updateSubscribeById);

// DELETE /subscribe/:id
router.delete('/subscribe/:id', deleteSubscribeById);

export default router;