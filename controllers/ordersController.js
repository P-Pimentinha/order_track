import Order from '../models/Order.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createOrder = async (req, res) => {
  const { company, order } = req.body;

  if (!company || !order) {
    throw new BadRequestError('Please Provide All Values');
  }

  req.body.createdBy = req.user.userId;

  const orders = await Order.create(req.body);
  res.status(StatusCodes.CREATED).json({ orders });
};

const deleteOrder = async (req, res) => {
  res.send('deleteOrder');
};

const getAllOrders = async (req, res) => {
  res.send('getAllOrders');
};

const updateOrder = async (req, res) => {
  res.send('updateOrder');
};

export { createOrder, deleteOrder, getAllOrders, updateOrder };
