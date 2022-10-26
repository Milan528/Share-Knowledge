import express from 'express';
import { createFile, getFile } from '../controllers/files.controller.js';
import multer from 'multer';
import path from 'path';

const fileRoutes = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: process.env.SERVER_STORAGE, //putanja je relativna u odnosu na glavni inex.js
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
    }
  })
});

fileRoutes.route('/:id').get(getFile).post(upload.single('file'), createFile);
export default fileRoutes;
