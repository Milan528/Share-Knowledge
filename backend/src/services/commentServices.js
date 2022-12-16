import QUERYS from '../sqlQuerys/comments.querys.js';
import FILE_QUERYS from '../sqlQuerys/files.querys.js';
import database from '../tools/database.js';
import { getTodaysDate } from '../tools/dateFormater.js';
import ResponseManager from '../tools/ResponseManager/index.js';
import COMMENT_LIKED_BY_QUERYS from '../sqlQuerys/commentLikedBy.querys.js';
import COMMENT_DISLIKED_BY_QUERYS from '../sqlQuerys/commentDislikedBy.querys.js';

export const commentLikeDislikeStatus = {
  liked: 'liked',
  disliked: 'disliked',
  none: 'none'
};

export const getCommentLikeDislikeStatus = async (req, res) => {
  const { userID, commentID } = req.body;

  const { results, error } = await database.query(COMMENT_LIKED_BY_QUERYS.SELECT_COMMENT_LIKE, [
    userID,
    commentID
  ]);

  if (error) {
    return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (results[0]) {
    const data = commentLikeDislikeStatus.liked;
    return ResponseManager.OK(res, `Like status is: ${data}`, data);
  } else if (!results[0]) {
    await checkCommentDislikeStatus(req, res);
  }

  async function checkCommentDislikeStatus(req, res) {
    const { results, error } = await database.query(
      COMMENT_DISLIKED_BY_QUERYS.SELECT_COMMENT_DISLIKE,
      [userID, commentID]
    );

    if (error) {
      return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
    } else if (results[0]) {
      const data = commentLikeDislikeStatus.disliked;
      return ResponseManager.OK(res, `Like status is: ${data}`, data);
    } else if (!results[0]) {
      const data = commentLikeDislikeStatus.none;
      return ResponseManager.OK(res, `Like status is: ${data}`, data);
    }
  }
};

export const getCommentsForPost = async (req, res) => {
  const { postId } = req.params;
  let { results, error } = await database.query(QUERYS.SELECT_COMMENTS_FOR_POST(postId));
  if (error) {
    return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  }
  if (!results) {
    return ResponseManager.OK(res, `No comments for selected post`);
  }

  await getCommentFiles(results, res);

  async function getCommentFiles(comments, res) {
    for (let comment of comments) {
      const { results: commentFiles, error } = await database.query(
        FILE_QUERYS.SELECT_FILES_FOR_COMMENT,
        comment.id
      );
      if (error) {
        return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
      }
      comment.files = !commentFiles ? [] : commentFiles;
    }

    return ResponseManager.OK(res, `Comments retrieved`, comments);
  }
};

export const createComment = async (req, res) => {
  const { comment, userID } = req.body;
  comment.userId = userID;
  const { text, postID } = comment;
  const date = getTodaysDate();

  const { results, error } = await database.query(QUERYS.CREATE_COMMENT, [
    text,
    date,
    postID,
    userID
  ]);

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    const commentID = results.insertId;

    ResponseManager.CREATED(res, `Post created`, commentID);
  }
};
