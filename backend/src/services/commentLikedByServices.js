import QUERYS from '../sqlQuerys/commentLikedBy.querys.js';
import database from '../tools/database.js';
import response from '../tools/response/index.js';
import { commentLikeDislikeStatus } from './commentServices.js';

export const createCommentLike = async (req) => {
  const { userID, commentID } = req.body;
  const { results, error } = await database.query(QUERYS.CREATE_COMMENT_LIKE, [userID, commentID]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.CREATED(`Comment like created`, commentLikeDislikeStatus.liked);
  }
};

export const deleteCommentLike = async (req) => {
  const { userID, commentID } = req.body;
  const { results, error } = await database.query(QUERYS.DELETE_COMMENT_LIKE, [userID, commentID]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.OK(`Comment like deleted`, commentLikeDislikeStatus.none);
  }
};
