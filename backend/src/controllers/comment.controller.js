import services from '../services/index.js';
const { commentServices, commentLikedByServices, commentDislikedByServices } = services;

export const getCommentsForPost = async (req, res) => {
  return commentServices.getCommentsForPost(req, res);
};

export const createComment = async (req, res) => {
  return commentServices.createComment(req, res);
};

export const createCommentLike = async (req, res) => {
  return commentLikedByServices.createCommentLike(req, res);
};

export const deleteCommentLike = async (req, res) => {
  return commentLikedByServices.deleteCommentLike(req, res);
};

export const createCommentDislike = async (req, res) => {
  return commentDislikedByServices.createCommentDislike(req, res);
};

export const deleteCommentDislike = async (req, res) => {
  return commentDislikedByServices.deleteCommentDislike(req, res);
};

export const getCommentLikeDislikeStatus = async (req, res) => {
  return commentServices.getCommentLikeDislikeStatus(req, res);
};
