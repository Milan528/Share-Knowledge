import express from 'express';
import { getTags } from '../controllers/tags.controller.js';

const tagsRoutes = express.Router();

tagsRoutes.route('/').get(getTags);

export default tagsRoutes;
