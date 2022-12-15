import express from 'express';
import {
  getPost,
  getPostsByUsername,
  createPost,
  deletePost,
  updatePost,
  getSpecificPosts
} from '../controllers/posts.controller.js';
import tokenValidation from '../tools/tokenValidation.js';

const postsRoutes = express.Router();

postsRoutes.route('/').post(tokenValidation, createPost);
postsRoutes.route('/:id').get(getPost).put(updatePost).delete(deletePost);
postsRoutes.route('/specificPosts').post(getSpecificPosts);
postsRoutes.route('/user/:username/:order').get(getPostsByUsername);

export default postsRoutes;
