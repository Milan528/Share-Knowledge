import express from 'express';
import {
  getUsersAndLikes,
  getUsernamesWithRoles,
  updateUserRole,
  getUserByUsername,
  banUserAccount,
  unbanUserAccount,
  blacklistUserAccount
} from '../controllers/user.controller.js';
import { accountIsAdmin } from '../tools/accountRoleValidator.js';
import tokenValidation from '../tools/tokenValidation.js';

const usersRoutes = express.Router();

usersRoutes.route('/likes').get(getUsersAndLikes);
usersRoutes.route('/roles').get(getUsernamesWithRoles);
usersRoutes.route('/username/:username').get(getUserByUsername);

//ADMIN OPERATIONS
usersRoutes.route('/updateRole').post(tokenValidation, accountIsAdmin, updateUserRole);
usersRoutes.route('/banUser').post(tokenValidation, accountIsAdmin, banUserAccount);
usersRoutes.route('/unbanUser').post(tokenValidation, accountIsAdmin, unbanUserAccount);
usersRoutes.route('/blacklistUser').post(tokenValidation, accountIsAdmin, blacklistUserAccount);

export default usersRoutes;
