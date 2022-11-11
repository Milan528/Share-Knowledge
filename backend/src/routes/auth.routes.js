import express from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller.js';

const authRoutes = express.Router();

authRoutes.route('/login').post(loginUser);
authRoutes.route('/register').post(registerUser);

export default authRoutes;
