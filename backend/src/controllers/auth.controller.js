import services from '../services/index.js';
const { authServices } = services;

export const loginUser = async (req, res) => {
  return authServices.loginUser(req, res);
};

export const registerUser = async (req, res) => {
  return authServices.registerUser(req, res);
};
