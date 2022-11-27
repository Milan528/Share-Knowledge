import express from 'express';
import {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePost,
  getSpecificPosts,
  getSuggestions
} from '../controllers/posts.controller.js';
import tokenValidation from '../tools/tokenValidation.js';

const postsRoutes = express.Router();

postsRoutes.route('/').get(getPosts).post(tokenValidation, createPost);
postsRoutes.route('/:id').get(getPost).put(updatePost).delete(deletePost);
postsRoutes.route('/specificPosts').post(getSpecificPosts);
postsRoutes.route('/suggestions').post(getSuggestions);

export default postsRoutes;
