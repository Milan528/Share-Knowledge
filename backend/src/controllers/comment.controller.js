import services from '../services/index.js';
const { commentServices } = services;

export const getCommentsForPost = async (req, res) => {
  return commentServices.getCommentsForPost(req, res);
};

export const createComment = async (req, res) => {
  return commentServices.createComment(req, res);
};
