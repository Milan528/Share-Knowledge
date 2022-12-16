import services from '../services/index.js';
const { postServices, postLikedByServices, postDislikedByServices } = services;

export const getPostsByUsername = async (req, res) => {
  return postServices.getPostsByUsername(req, res);
};

export const getPost = async (req, res) => {
  return postServices.getPost(req, res);
};

export const createPost = async (req, res) => {
  return postServices.createPost(req, res);
};

export const updatePost = async (req, res) => {
  return postServices.updatePost(req, res);
};

export const deletePost = async (req, res) => {
  return postServices.deletePost(req, res);
};

export const getSpecificPosts = async (req, res) => {
  return postServices.getSpecificPosts(req, res);
};

export const createPostLike = async (req, res) => {
  return postLikedByServices.createPostLike(req, res);
};

export const deletePostLike = async (req, res) => {
  return postLikedByServices.deletePostLike(req, res);
};

export const createPostDislike = async (req, res) => {
  return postDislikedByServices.createPostDislike(req, res);
};

export const deletePostDislike = async (req, res) => {
  return postDislikedByServices.deletePostDislike(req, res);
};

export const getPostLikeDislikeStatus = async (req, res) => {
  return postServices.getPostLikeDislikeStatus(req, res);
};
