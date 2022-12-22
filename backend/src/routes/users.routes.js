import express from 'express';
import { getUsersAndLikes } from '../controllers/user.controller.js';

const usersRoutes = express.Router();

usersRoutes.route('/likes').get(getUsersAndLikes);

export default usersRoutes;
