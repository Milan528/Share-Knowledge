import express from 'express';
import {
  loginUser,
  registerUser,
  updatePassword,
  updateUsername
} from '../controllers/auth.controller.js';
import { accountBanned } from '../tools/accountStatusValidator.js';
import tokenValidation from '../tools/tokenValidation.js';

const authRoutes = express.Router();

authRoutes.route('/login').post(accountBanned, loginUser);
authRoutes.route('/register').post(registerUser);
authRoutes.route('/updatePassword').post(tokenValidation, updatePassword);
authRoutes.route('/updateUsername').post(tokenValidation, updateUsername);
export default authRoutes;
