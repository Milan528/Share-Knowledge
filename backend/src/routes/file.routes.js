import express from 'express';
import { createFile, getFile } from '../controllers/files.controller.js';
import upload from '../tools/multer.js';

const fileRoutes = express.Router();
fileRoutes.route('/').post(upload.single('file'), createFile);
fileRoutes.route('/:fileName').get(getFile);
export default fileRoutes;
