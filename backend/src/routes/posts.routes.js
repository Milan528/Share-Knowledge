import express from 'express';
import {
  getPostsByUsername,
  createPost,
  deletePost,
  updatePost,
  getPostsForHomepageFilters,
  createPostLike,
  deletePostLike,
  createPostDislike,
  deletePostDislike,
  getPostById
} from '../controllers/posts.controller.js';
import tokenValidation from '../tools/tokenValidation.js';

const postsRoutes = express.Router();

postsRoutes.route('/').post(tokenValidation, createPost);
postsRoutes.route('/postId/:id').get(getPostById).put(updatePost).delete(deletePost);
postsRoutes.route('/postsForHomepageFilters').post(getPostsForHomepageFilters);
postsRoutes.route('/user').get(getPostsByUsername);
postsRoutes
  .route('/like')
  .post(tokenValidation, createPostLike)
  .delete(tokenValidation, deletePostLike);
postsRoutes
  .route('/dislike')
  .post(tokenValidation, createPostDislike)
  .delete(tokenValidation, deletePostDislike);

export default postsRoutes;
