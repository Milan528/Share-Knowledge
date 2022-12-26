import services from '../services/index.js';
const { commentServices, commentLikedByServices, commentDislikedByServices } = services;

export const getCommentsForPost = async (req, res) => {
  const response = await commentServices.getCommentsForPost(req);
  return res.status(response.statusCode).send(response);
};

export const createComment = async (req, res) => {
  const response = await commentServices.createComment(req);
  return res.status(response.statusCode).send(response);
};

export const deleteComment = async (req, res) => {
  const response = await commentServices.deleteComment(req);
  return res.status(response.statusCode).send(response);
};

export const createCommentLike = async (req, res) => {
  const response = await commentLikedByServices.createCommentLike(req);
  return res.status(response.statusCode).send(response);
};

export const deleteCommentLike = async (req, res) => {
  const response = await commentLikedByServices.deleteCommentLike(req);
  return res.status(response.statusCode).send(response);
};

export const createCommentDislike = async (req, res) => {
  const response = await commentDislikedByServices.createCommentDislike(req);
  return res.status(response.statusCode).send(response);
};

export const deleteCommentDislike = async (req, res) => {
  const response = await commentDislikedByServices.deleteCommentDislike(req);
  return res.status(response.statusCode).send(response);
};

export const reportComment = async (req, res) => {
  const response = await commentServices.reportComment(req);
  return res.status(response.statusCode).send(response);
};

export const getReportedComments = async (req, res) => {
  const response = await commentServices.getReportedComments(req);
  return res.status(response.statusCode).send(response);
};
