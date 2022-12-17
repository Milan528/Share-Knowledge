import QUERYS from '../sqlQuerys/postLikedBy.querys.js';
import database from '../tools/database.js';
import response from '../tools/response/index.js';
import { getPostLikes, postLikeDislikeStatus } from './postServices.js';

export const createPostLike = async (req) => {
  const { userID, postID } = req.body;
  const { results, error } = await database.query(QUERYS.CREATE_POST_LIKE, [userID, postID]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.OK(`Post like created`, postLikeDislikeStatus.liked);
    // return await getPostLikes(postID, `Post like created`, postLikeDislikeStatus.liked);
  }
};

export const deletePostLike = async (req) => {
  const { userID, postID } = req.body;
  const { results, error } = await database.query(QUERYS.DELETE_POST_LIKE, [userID, postID]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    // return await getPostLikes(postID, `Post like deleted`, postLikeDislikeStatus.none);
    return response.OK(`Post like deleted`, postLikeDislikeStatus.none);
  }
};
