import services from '../services/index.js';
const { postServices, postLikedByServices, postDislikedByServices } = services;

export const getPostsByUsername = async (req, res) => {
  const response = await postServices.getPostsByUsername(req);
  return res.status(response.statusCode).send(response);
};

export const getPost = async (req, res) => {
  const response = await postServices.getPost(req);
  return res.status(response.statusCode).send(response);
};

export const createPost = async (req, res) => {
  const response = await postServices.createPost(req);
  return res.status(response.statusCode).send(response);
};

export const updatePost = async (req, res) => {
  const response = await postServices.updatePost(req);
  return res.status(response.statusCode).send(response);
};

export const deletePost = async (req, res) => {
  const response = await postServices.deletePost(req);
  return res.status(response.statusCode).send(response);
};

export const getSpecificPosts = async (req, res) => {
  const response = await postServices.getSpecificPosts(req);
  return res.status(response.statusCode).send(response);
};

export const createPostLike = async (req, res) => {
  const response = await postLikedByServices.createPostLike(req);
  return res.status(response.statusCode).send(response);
};

export const deletePostLike = async (req, res) => {
  const response = await postLikedByServices.deletePostLike(req);
  return res.status(response.statusCode).send(response);
};

export const createPostDislike = async (req, res) => {
  const response = await postDislikedByServices.createPostDislike(req);
  return res.status(response.statusCode).send(response);
};

export const deletePostDislike = async (req, res) => {
  const response = await postDislikedByServices.deletePostDislike(req);
  return res.status(response.statusCode).send(response);
};

export const getPostLikeDislikeStatus = async (req, res) => {
  const response = await postServices.getPostLikeDislikeStatus(req);
  return res.status(response.statusCode).send(response);
};
