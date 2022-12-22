import express from 'express';
import {
  getUsersAndLikes,
  getUsernamesWithRoles,
  updateUserRole
} from '../controllers/user.controller.js';

const usersRoutes = express.Router();

usersRoutes.route('/likes').get(getUsersAndLikes);
usersRoutes.route('/roles').get(getUsernamesWithRoles);
usersRoutes.route('/updateRole').post(updateUserRole);

export default usersRoutes;
