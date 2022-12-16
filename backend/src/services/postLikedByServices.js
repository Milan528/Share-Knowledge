import QUERYS from '../sqlQuerys/postLikedBy.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';

export const createPostLike = async (req, res) => {
  const { userID, postID } = req.body;
  const { results, error } = await database.query(QUERYS.CREATE_POST_LIKE, [userID, postID]);
  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    // const postID = results.insertId;
    console.log(results);
    return ResponseManager.CREATED(res, `Post like created`);
  }
};

export const deletePostLike = async (req, res) => {
  const { userID, postID } = req.body;
  const { results, error } = await database.query(QUERYS.DELETE_POST_LIKE, [userID, postID]);

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  }
  if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    ResponseManager.OK(`Post like deleted`);
  }
};
