import QUERYS from '../sqlQuerys/commentDislikedBy.querys.js';
import database from '../tools/database.js';
import { commentLikeDislikeStatus } from '../tools/enums.js';
import response from '../tools/response/index.js';

export const createCommentDislike = async (req) => {
  const { userID, commentID } = req.body;
  const { results, error } = await database.query(QUERYS.CREATE_COMMENT_DISLIKE, [
    userID,
    commentID
  ]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.CREATED(`Comment dislike created`, commentLikeDislikeStatus.disliked);
  }
};

export const deleteCommentDislike = async (req) => {
  const { userID, commentID } = req.body;
  const { results, error } = await database.query(QUERYS.DELETE_COMMENT_DISLIKE, [
    userID,
    commentID
  ]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.OK(`Comment dislike deleted`, commentLikeDislikeStatus.none);
  }
};
