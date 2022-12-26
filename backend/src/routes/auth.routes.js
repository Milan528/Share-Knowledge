import express from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller.js';
import { accountBanned } from '../tools/accountStatusValidator.js';

const authRoutes = express.Router();

authRoutes.route('/login').post(accountBanned, loginUser);
authRoutes.route('/register').post(registerUser);

export default authRoutes;
