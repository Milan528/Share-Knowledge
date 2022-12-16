import express from 'express';
import {
  getPost,
  getPostsByUsername,
  createPost,
  deletePost,
  updatePost,
  getSpecificPosts,
  createPostLike,
  deletePostLike,
  createPostDislike,
  deletePostDislike
} from '../controllers/posts.controller.js';
import { getPostLikeDislikeStatus } from '../services/postServices.js';
import tokenValidation from '../tools/tokenValidation.js';

const postsRoutes = express.Router();

postsRoutes.route('/').post(tokenValidation, createPost);
postsRoutes.route('/postId/:id').get(getPost).put(updatePost).delete(deletePost);
postsRoutes.route('/specificPosts').post(getSpecificPosts);
postsRoutes.route('/user').get(getPostsByUsername);
postsRoutes
  .route('/like')
  .post(tokenValidation, createPostLike)
  .delete(tokenValidation, deletePostLike);
postsRoutes
  .route('/dislike')
  .post(tokenValidation, createPostDislike)
  .delete(tokenValidation, deletePostDislike);
postsRoutes.route('/postLikeDislikeStatus').post(tokenValidation, getPostLikeDislikeStatus);

export default postsRoutes;
