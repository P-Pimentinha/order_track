import User from '../models/User.js';

const register = async (req, res, next) => {
  res.send('register');
};

const login = async (req, res) => {
  res.send('login');
};

const updateUser = async (req, res) => {
  res.send('update');
};

export { register, login, updateUser };
