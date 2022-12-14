import QUERYS from '../sqlQuerys/posts.querys.js';
import POST_REPORT_QUERYS from '../sqlQuerys/postReportedBy.querys.js';
import TAG_QUERYS from '../sqlQuerys/tags.querys.js';
import FILE_QUERYS from '../sqlQuerys/files.querys.js';
import POST_TAG_QUERYS from '../sqlQuerys/postTag.querys.js';
import database from '../tools/database.js';
import { getTodaysDate } from '../tools/dateFormater.js';
import POST_LIKED_BY_QUERYS from '../sqlQuerys/postLikedBy.querys.js';
import POST_DISLIKED_BY_QUERYS from '../sqlQuerys/postDislikedBy.querys.js';
import response from '../tools/response/index.js';
import { checkIfLogged } from '../tools/tokenValidation.js';
import { postLikeDislikeStatus } from '../tools/enums.js';
import { removeCommentFiles, removePostFiles } from './fileServices.js';
import services from './index.js';
import HttpStatus from '../tools/response/httpStatus.js';

/*********************************ONE*********************************/

const getPostLikeDislikeStatusAndOwnership = async (req, responseData) => {
  const loggedStatus = checkIfLogged(req);
  if (loggedStatus.status) {
    const { posts } = responseData;
    const userID = loggedStatus.userID;
    for (let post of posts) {
      const postID = post.id;

      const { results: likesResults, error: likesError } = await database.query(
        POST_LIKED_BY_QUERYS.SELECT_POST_LIKE,
        [userID, postID]
      );

      if (likesError) {
        return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
      } else if (likesResults[0]) {
        post.likeStatus = postLikeDislikeStatus.liked;
      } else if (!likesResults[0]) {
        const { results: dislikesResults, error: dislikesError } = await database.query(
          POST_DISLIKED_BY_QUERYS.SELECT_POST_DISLIKE,
          [userID, postID]
        );

        if (dislikesError) {
          return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
        } else if (dislikesResults[0]) {
          post.likeStatus = postLikeDislikeStatus.disliked;
        } else if (!dislikesResults[0]) {
          post.likeStatus = postLikeDislikeStatus.none;
        }
      }

      if (post.userId === userID) post.owner = true;
      else post.owner = false;
    }
  }

  return await getPostFiles(responseData);
};

export const getPostsByUsername = async (req) => {
  const { username, order } = req.query;
  const { results, error } = await database.query(QUERYS.SELECT_POSTS_BY_USERNAME(username, order));
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.OK(`No posts found`);
  }

  const responseData = {
    posts: results
  };
  return await getTagsForPosts(req, responseData);
};

export const getPostById = async (req) => {
  const { results, error } = await database.query(
    QUERYS.SELECT_POST_WITH_USERNAME_BY_POSTID(req.params.id)
  );
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results[0]) {
    return response.OK(`No post found`, { posts: [] });
  }
  const responseData = {
    posts: results
  };
  return await getTagsForPosts(req, responseData);
};

export const createPost = async (req) => {
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
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    const postID = results.insertId;

    return await addTagForPost(postID, post.tags);
  }
};

export const updatePost = async (req) => {
  const { results, error } = await database.query(QUERYS.SELECT_POST_BY_POSTID(req.params.id));

  if (!results[0]) {
    return response.NOT_FOUND(`Post by id ${req.params.id} was not found`);
  }

  const { results: results2, error: error2 } = await database.query(QUERYS.UPDATE_POST, [
    ...Object.values(req.body),
    req.params.id
  ]);

  if (error2) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    const post = {
      id: req.params.id,
      ...req.body
    };
    return response.OK(`Post updated`, post);
  }
};

export const deletePostsForUserID = async (userId) => {
  const { results, error } = await database.query(QUERYS.SELECT_POSTS_FOR_USER_ID(userId));

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results || results.length === 0) {
    return response.NOT_FOUND(`No comments`);
  } else {
    for (let postId of results) {
      const request = {
        params: {
          id: postId.id
        }
      };

      await deletePost(request);
    }
    return response.OK(`Posts deleted`);
  }
};

export const deletePost = async (req) => {
  const { results: commentRes, error: commentError } = await database.query(
    QUERYS.GET_POST_COMMENT_IDS,
    [req.params.id]
  );
  if (commentError) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  const { results, error } = await database.query(QUERYS.DELETE_POST, [req.params.id]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    await removePostFiles(req.params.id);
    for (const commnetId of commentRes) {
      removeCommentFiles(commnetId.id);
    }
    return response.OK('Post removed', [req.params.id]);
  }
};

export const dismissReport = async (req) => {
  const { results, error } = await database.query(POST_REPORT_QUERYS.DELETE_REPORT, [
    req.params.reportedById,
    req.params.postId
  ]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.OK('Report dissmised', [req.params.postId]);
  }
};

export const reportPost = async (req) => {
  const { postedBy, postID, userID } = req.body;

  const { results, error } = await database.query(POST_REPORT_QUERYS.SELECT_REPORTED_POST, [
    userID,
    postID
  ]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results[0]) {
    const res = await services.userServices.getUserByUsername(postedBy);
    if (res.statusCode === HttpStatus.OK.code) {
      const postedByID = res.data.id;
      return await addReportPostEntry(postID, postedByID, userID);
    } else {
      return res;
    }
  } else {
    return response.OK(`Already reported`);
  }
};

/* - - - - - - - - - - - - - - -HELPERS- - - - - - - - - - - - - - - */

async function addTagForPost(postID, tags) {
  for (const tag of tags) {
    const { results, error } = await database.query(POST_TAG_QUERYS.CREATE_POST_TAG, [postID, tag]);

    if (error) {
      return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
    } else if (!results) {
      return response.INTERNAL_SERVER_ERROR(`Error occurred`);
    }
  }

  return response.CREATED(`Post created`, postID);
}

async function addReportPostEntry(postId, postedById, reportedById) {
  const { results, error } = await database.query(POST_REPORT_QUERYS.CREATE_REPORT_POST, [
    reportedById,
    postId,
    postedById
  ]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  }

  return response.CREATED(`Report created`, postId);
}

/*********************************MANY*********************************/

export const getPostsForHomepageFilters = async (req) => {
  let { search, startIndex, count, tags, type, order } = req.body;
  const sql = QUERYS.SELECT_POSTS_FOR_HOMEPAGE_FILTERS(
    tags,
    search,
    startIndex,
    count,
    type,
    order
  );
  let { results, error } = await database.query(sql);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.OK(`No data for selected search`);
  }

  const dto = {
    posts: results
  };

  return await getTotalNumberOfPagesForHomepageFilters(req, dto);
};

export const getReportedPosts = async (req) => {
  let { results, error } = await database.query(POST_REPORT_QUERYS.SELECT_REPORTED_POSTS);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.NOT_FOUND(`No data for selected search`);
  } else {
    let postArray = [];
    for (let reportEtnry of results) {
      req.params.id = reportEtnry.postId;
      let res = await getPostById(req);

      if (res.statusCode === HttpStatus.OK.code) {
        const post = res.data.posts[0];
        post.reportedById = reportEtnry.reportedById;
        postArray.push(post);
      } else {
        return res;
      }
    }
    return response.OK('Reported posts', postArray);
  }
};

const getTotalNumberOfPagesForHomepageFilters = async (req, dto) => {
  let { search, count, tags, type } = req.body;
  const sql = QUERYS.SELECT_TOTAL_NUMBER_OF_PAGES_FOR_HOME_PAGE_FILTERS(tags, search, type);

  let { results, error } = await database.query(sql);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.OK(`No data for selected search`);
  }

  const totalRows = results[0].totalRows;

  const totalNumberOfPages = Math.ceil(totalRows / count);
  dto.totalNumberOfPages = totalNumberOfPages;
  dto.totalNumberOfPosts = totalRows;

  return await getTagsForPosts(req, dto);
};

/* - - - - - - - - - - - - - - -HELPERS- - - - - - - - - - - - - - - */

async function getTagsForPosts(req, responseData) {
  const posts = responseData.posts;
  for (const post of posts) {
    let { results, error } = await database.query(TAG_QUERYS.SELECT_TAGS_FOR_POST_ID, post.id);
    let tagsArray = [];

    if (error) {
      return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
    }
    if (!results) {
      return response.OK(`No data for selected search`);
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

  return await getPostLikeDislikeStatusAndOwnership(req, responseData);
}

async function getPostFiles(responseData) {
  const posts = responseData.posts;
  for (let post of posts) {
    const { results: postFiles, error } = await database.query(
      FILE_QUERYS.SELECT_FILES_FOR_POST,
      post.id
    );
    if (error) {
      return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
    }
    post.files = !postFiles ? [] : postFiles;
  }

  return response.OK(`Posts retrieved`, responseData);
}
