import QUERYS from '../sqlQuerys/posts.querys.js';
import TAG_QUERYS from '../sqlQuerys/tags.querys.js';
import FILE_QUERYS from '../sqlQuerys/files.querys.js';
import POST_TAG_QUERYS from '../sqlQuerys/postTag.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';
import { getTodaysDate } from '../tools/dateFormater.js';

export const getPostsByUsername = async (req, res) => {
  const { username, order } = req.query;
  const { results, error } = await database.query(QUERYS.SELECT_POSTS_BY_USERNAME(username, order));
  if (error) {
    return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    return ResponseManager.OK(res, `No posts found`);
  }

  const responseData = {
    posts: results
  };
  await getTagsForPosts(responseData, res);
};

export const getPost = async (req, res) => {
  const { results, error } = await database.query(QUERYS.SELECT_POST_BY_POSTID(req.params.id));
  if (error) {
    return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  }
  if (!results[0]) {
    return ResponseManager.OK(res, `No post found`);
  }
  const responseData = {
    posts: results
  };
  await getTagsForPosts(responseData, res);
};

export const createPost = async (req, res) => {
  const { userID, post } = req.body;
  post.userId = userID;
  post.date = getTodaysDate();
  const { results, error } = await database.query(QUERYS.CREATE_POST, [
    post.title,
    post.text,
    post.type,
    post.userId,
    post.date
  ]);
  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    const postID = results.insertId;

    await addTagForPost(res, postID, post.tags);
  }

  async function addTagForPost(res, postID, tags) {
    for (const tag of tags) {
      const { results, error } = await database.query(POST_TAG_QUERYS.CREATE_POST_TAG, [
        postID,
        tag
      ]);

      if (error) {
        return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
      } else if (!results) {
        return ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
      }
    }

    return ResponseManager.CREATED(res, `Post created`, postID);
  }
};

export const updatePost = async (req, res) => {
  const { results, error } = await database.query(QUERYS.SELECT_POST_BY_POSTID(req.params.id));

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
  let { search, startIndex, count, tags, type, order } = req.body;
  const sql = QUERYS.SELECT_FILTERED_POSTS(tags, search, startIndex, count, type, order);
  let { results, error } = await database.query(sql);

  if (error) {
    return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  }
  if (!results) {
    return ResponseManager.OK(res, `No data for selected search`);
  }

  const dto = {
    posts: results
  };

  await getTotalNumberOfPagesForSpecificPosts(req, res, dto);
};

export const getTotalNumberOfPagesForSpecificPosts = async (req, res, dto) => {
  let { search, count, tags, type } = req.body;
  const sql = QUERYS.SELECT_TOTAL_NUMBER_OF_PAGES_FOR_SPECIFICS_POSTS(tags, search, type);
  let { results, error } = await database.query(sql);

  if (error) {
    return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  }
  if (!results) {
    return ResponseManager.OK(res, `No data for selected search`);
  }

  const totalRows = results[0].totalRows;

  const totalNumberOfPages = Math.ceil(totalRows / count);
  dto.totalNumberOfPages = totalNumberOfPages;
  dto.totalNumberOfPosts = totalRows;

  await getTagsForPosts(dto, res);
};

async function getTagsForPosts(responseData, res) {
  const posts = responseData.posts;
  for (const post of posts) {
    let { results, error } = await database.query(TAG_QUERYS.SELECT_TAGS_FOR_POST_ID, post.id);
    let tagsArray = [];

    if (error) {
      return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
    }
    if (!results) {
      return ResponseManager.OK(res, `No data for selected search`);
    }
    for (const result of results) {
      let tag = {
        id: result.id,
        tag: result.tag
      };
      tagsArray.push(tag);
    }
    post.tags = tagsArray;
  }
  await getPostFiles(responseData, res);
}

async function getPostFiles(responseData, res) {
  const posts = responseData.posts;
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

  return ResponseManager.OK(res, `Posts retrieved`, responseData);
}
