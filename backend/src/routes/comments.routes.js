import express from 'express';
import { getCommentsForPost } from '../controllers/comment.controller.js';
// import tokenValidation from '../tools/tokenValidation.js';

const postsRoutes = express.Router();

// postsRoutes.route('/').get(getPosts).post(tokenValidation, createPost);
// postsRoutes.route('/:id').get(getPost).put(updatePost).delete(deletePost);
postsRoutes.route('/commentsForPost').post(getCommentsForPost);

export default postsRoutes;
