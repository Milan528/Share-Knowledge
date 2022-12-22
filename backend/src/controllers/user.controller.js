import services from '../services/index.js';
const { userServices } = services;

export const getUsersAndLikes = async (req, res) => {
  const response = await userServices.getUsersAndLikes(req);
  return res.status(response.statusCode).send(response);
};

export const getUsernamesWithRoles = async (req, res) => {
  const response = await userServices.getUsernamesWithRoles(req);
  return res.status(response.statusCode).send(response);
};

export const updateUserRole = async (req, res) => {
  const response = await userServices.updateUserRole(req);
  return res.status(response.statusCode).send(response);
};
