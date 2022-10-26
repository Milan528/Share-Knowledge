import QUERYS from '../sqlQuerys/posts.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';

export const getPosts = async (req, res) => {
  const { results, error } = await database.query(QUERYS.SELECT_POSTS);

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.OK(res, `No posts found`);
  } else {
    ResponseManager.OK(res, `Posts retrieved`, results);
  }
};

export const getPost = async (req, res) => {
  const { results, error } = await database.query(QUERYS.SELECT_POST, [req.params.id]);

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results[0]) {
    ResponseManager.OK(res, `No post found`);
  } else {
    ResponseManager.OK(res, `Post retrieved`, results[0]);
  }
};

export const createPost = async (req, res) => {
  const { results, error } = await database.query(QUERYS.CREATE_POST, Object.values(req.body));

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    const post = {
      id: results.insertId,
      ...req.body
    };

    ResponseManager.CREATED(res, `Post created`, post);
  }
};

export const updatePost = async (req, res) => {
  const { results, error } = await database.query(QUERYS.SELECT_POST, [req.params.id]);

  if (!results[0]) {
    ResponseManager.NOT_FOUND(res, `Post by id ${req.params.id} was not found`);
    return;
  }

  const { results: results2, error: error2 } = await database.query(QUERYS.UPDATE_POST, [
    ...Object.values(req.body),
    req.params.id
  ]);

  if (error2) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    const post = {
      id: req.params.id,
      ...req.body
    };
    ResponseManager.OK(`Post updated`, post);
  }
};

export const deletePost = async (req, res) => {
  const { results, error } = await database.query(QUERYS.DELETE_POST, [req.params.id]);

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  }
  if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    ResponseManager.OK(`Post deleted`);
  }
};
