import express from 'express';
import { getCommentsForPost, createComment } from '../controllers/comment.controller.js';
import tokenValidation from '../tools/tokenValidation.js';

const commentRoutes = express.Router();

commentRoutes.route('/').post(tokenValidation, createComment);
// postsRoutes.route('/:id').get(getPost).put(updatePost).delete(deletePost);
commentRoutes.route('/post/:postId').get(getCommentsForPost);

export default commentRoutes;
