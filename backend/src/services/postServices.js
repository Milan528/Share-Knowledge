import QUERYS from '../sqlQuerys/posts.querys.js';
import TAG_QUERYS from '../sqlQuerys/tags.querys.js';
import FILE_QUERYS from '../sqlQuerys/files.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';

export const getPosts = async (req, res) => {
  const { startIndex = 0, count = 2 } = req.query;
  const { results, error } = await database.query(QUERYS.SELECT_POSTS, [startIndex, count]);
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

export const getSpecificPosts = async (req, res) => {
  let { search, startIndex, count, tags, type } = req.body;
  const sql = QUERYS.SELECT_FILTERED_POSTS(tags, search, startIndex, count, type);
  let { results, error } = await database.query(sql);

  if (error) {
    return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  }
  if (!results) {
    return ResponseManager.OK(res, `No data for selected search`);
  }
  getTagsForPosts(results, res);

  async function getTagsForPosts(posts, res) {
    for (const post of posts) {
      const tags = post.tags.split(',');
      let tagsArray = [];
      for (const tag of tags) {
        let { results, error } = await database.query(TAG_QUERYS.SELECT_TAG_BY_ID, tag);

        if (error) {
          return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
        }
        if (!results) {
          return ResponseManager.OK(res, `No data for selected search`);
        }

        tagsArray.push(results[0]);
      }
      post.tags = tagsArray;
    }
    getPostFiles(posts, res);
  }

  async function getPostFiles(posts, res) {
    for (let post of posts) {
      const { results: postFiles, error } = await database.query(
        FILE_QUERYS.SELECT_FILES_FOR_POST,
        post.id
      );

      if (error) {
        return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
      }
      post.files = !postFiles ? [] : postFiles;
    }

    return ResponseManager.OK(res, `Posts retrieved`, posts);
  }
};

export const getSuggestions = async (req, res) => {
  const { params: searchParams } = req.body;
  console.log(searchParams);
  const { results, error } = await database.query(
    QUERYS.SELECT_SUGGESTIONS(searchParams.toLowerCase())
  );
  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.OK(res, `No suggestions found`);
  } else {
    ResponseManager.OK(res, `Suggestions retrieved`, results);
    //TODO
  }
};
