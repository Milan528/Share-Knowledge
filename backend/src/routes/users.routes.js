import express from 'express';
import {
  getUsersAndLikes,
  getUsernamesWithRoles,
  updateUserRole,
  getUserByUsername
} from '../controllers/user.controller.js';

const usersRoutes = express.Router();

usersRoutes.route('/likes').get(getUsersAndLikes);
usersRoutes.route('/roles').get(getUsernamesWithRoles);
usersRoutes.route('/updateRole').post(updateUserRole);
usersRoutes.route('/updateRole').post(updateUserRole);
usersRoutes.route('/username/:username').get(getUserByUsername);

export default usersRoutes;
