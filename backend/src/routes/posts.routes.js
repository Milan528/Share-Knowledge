import express from "express";
import { getPosts, putPosts } from "../controllers/posts.controller.js";

const postsRoutes = express.Router();

postsRoutes.route("/").get(getPosts).put(putPosts);

export default postsRoutes;
