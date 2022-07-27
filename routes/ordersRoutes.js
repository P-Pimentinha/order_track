import express from 'express';
const router = express.Router();

import {
  createOrder,
  deleteOrder,
  getAllOrders,
  updateOrder,
} from '../controllers/ordersController.js';

router.route('/').post(createOrder).get(getAllOrders);

router.route('/:id').delete(deleteOrder).patch(updateOrder);

export default router;
