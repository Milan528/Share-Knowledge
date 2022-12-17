import services from '../services/index.js';
const { uploadFileServices } = services;

export const uploadPostFile = async (req, res) => {
  const response = await uploadFileServices.uploadPostFile(req);
  return res.status(response.statusCode).send(response);
};

export const uploadCommentFile = async (req, res) => {
  const response = await uploadFileServices.uploadCommentFile(req);
  return res.status(response.statusCode).send(response);
};
