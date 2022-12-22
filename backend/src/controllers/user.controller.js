import services from '../services/index.js';
const { userServices } = services;

export const getUsersAndLikes = async (req, res) => {
  const response = await userServices.getUsersAndLikes(req);
  return res.status(response.statusCode).send(response);
};
