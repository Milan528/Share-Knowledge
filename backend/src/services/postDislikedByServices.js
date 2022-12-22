import QUERYS from '../sqlQuerys/postDislikedBy.querys.js';
import database from '../tools/database.js';
import { postLikeDislikeStatus } from '../tools/enums.js';
import response from '../tools/response/index.js';

export const createPostDislike = async (req) => {
  const { userID, postID } = req.body;
  const { results, error } = await database.query(QUERYS.CREATE_POST_DISLIKE, [userID, postID]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.OK(`Post dislike created`, postLikeDislikeStatus.disliked);
  }
};

export const deletePostDislike = async (req) => {
  const { userID, postID } = req.body;
  const { results, error } = await database.query(QUERYS.DELETE_POST_DISLIKE, [userID, postID]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.OK(`Post dislike deleted`, postLikeDislikeStatus.none);
  }
};
