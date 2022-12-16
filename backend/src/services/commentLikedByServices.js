import QUERYS from '../sqlQuerys/commentLikedBy.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';
import { commentLikeDislikeStatus } from './commentServices.js';

export const createCommentLike = async (req, res) => {
  const { userID, commentID } = req.body;
  const { results, error } = await database.query(QUERYS.CREATE_COMMENT_LIKE, [userID, commentID]);
  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    return ResponseManager.CREATED(res, `Comment like created`, commentLikeDislikeStatus.liked);
  }
};

export const deleteCommentLike = async (req, res) => {
  const { userID, commentID } = req.body;
  const { results, error } = await database.query(QUERYS.DELETE_COMMENT_LIKE, [userID, commentID]);

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  }
  if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    ResponseManager.OK(res, `Comment like deleted`, commentLikeDislikeStatus.none);
  }
};
