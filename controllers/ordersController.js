import Order from '../models/Order.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';

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
  const { id: orderId } = req.params;

  const order = await Order.findOne({ _id: orderId });

  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
  }

  checkPermissions(req.user, order.createdBy);

  await order.remove();
  res.status(StatusCodes.OK).json({ msg: 'Success! Order removed' });
};

const getAllOrders = async (req, res) => {
  const { sort, search } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.company = { $regex: search, $options: 'i' };
  }

  let result = Order.find(queryObject);

  if (sort === 'latest') {
    result = result.sort('-createdAt');
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt');
  }
  if (sort === 'a-z') {
    result = result.sort('company');
  }
  if (sort === 'z-a') {
    result = result.sort('-company');
  }

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit; //10

  result = result.skip(skip).limit(limit);

  const orders = await result;

  const totalOrders = await Order.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalOrders / limit);

  res.status(StatusCodes.OK).json({ orders, totalOrders, numOfPages });
};

const updateOrder = async (req, res) => {
  const { id: orderId } = req.params;

  const { company, order } = req.body;

  if (!company || !order) {
    throw new BadRequestError('Please Provide All Values');
  }

  const ordeR = await Order.findOne({ _id: orderId });

  if (!ordeR) {
    throw new NotFoundError(`No order with id ${orderId}`);
  }

  checkPermissions(req.user, ordeR.createdBy);

  const updatedOrder = await Order.findOneAndUpdate(
    { _id: orderId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedOrder });
};

export { createOrder, deleteOrder, getAllOrders, updateOrder };
