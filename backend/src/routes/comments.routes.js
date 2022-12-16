import express from 'express';
import {
  getCommentsForPost,
  createComment,
  createCommentLike,
  deleteCommentLike,
  createCommentDislike,
  deleteCommentDislike,
  getCommentLikeDislikeStatus
} from '../controllers/comment.controller.js';
import tokenValidation from '../tools/tokenValidation.js';

const commentRoutes = express.Router();

commentRoutes.route('/').post(tokenValidation, createComment);
commentRoutes.route('/post/:postId').get(getCommentsForPost);

commentRoutes
  .route('/like')
  .post(tokenValidation, createCommentLike)
  .delete(tokenValidation, deleteCommentLike);
commentRoutes
  .route('/dislike')
  .post(tokenValidation, createCommentDislike)
  .delete(tokenValidation, deleteCommentDislike);
commentRoutes.route('/commentLikeDislikeStatus').post(tokenValidation, getCommentLikeDislikeStatus);

export default commentRoutes;
