import services from '../services/index.js';
const { authServices } = services;

export const loginUser = async (req, res) => {
  const response = await authServices.loginUser(req);
  return res.status(response.statusCode).send(response);
};

export const registerUser = async (req, res) => {
  const response = await authServices.registerUser(req);
  return res.status(response.statusCode).send(response);
};

export const updatePassword = async (req, res) => {
  const response = await authServices.updatePassword(req);
  return res.status(response.statusCode).send(response);
};

export const updateUsername = async (req, res) => {
  const response = await authServices.updateUsername(req);
  return res.status(response.statusCode).send(response);
};
