import QUERYS from '../sqlQuerys/postDislikedBy.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';
import { getPostLikes, postLikeDislikeStatus } from './postServices.js';

export const createPostDislike = async (req, res) => {
  const { userID, postID } = req.body;
  const { results, error } = await database.query(QUERYS.CREATE_POST_DISLIKE, [userID, postID]);
  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    await getPostLikes(res, postID, `Post dislike created`, postLikeDislikeStatus.disliked);
  }
};

export const deletePostDislike = async (req, res) => {
  const { userID, postID } = req.body;
  const { results, error } = await database.query(QUERYS.DELETE_POST_DISLIKE, [userID, postID]);

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  }
  if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    await getPostLikes(res, postID, `Post dislike deleted`, postLikeDislikeStatus.none);
  }
};
