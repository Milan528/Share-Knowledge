import services from '../services/index.js';
const { postServices } = services;

export const getPosts = async (req, res) => {
  return postServices.getPosts(req, res);
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
