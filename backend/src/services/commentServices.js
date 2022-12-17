import QUERYS from '../sqlQuerys/comments.querys.js';
import FILE_QUERYS from '../sqlQuerys/files.querys.js';
import database from '../tools/database.js';
import { getTodaysDate } from '../tools/dateFormater.js';
import COMMENT_LIKED_BY_QUERYS from '../sqlQuerys/commentLikedBy.querys.js';
import COMMENT_DISLIKED_BY_QUERYS from '../sqlQuerys/commentDislikedBy.querys.js';
import response from '../tools/response/index.js';

export const commentLikeDislikeStatus = {
  liked: 'liked',
  disliked: 'disliked',
  none: 'none'
};

export const getCommentLikeDislikeStatus = async (req) => {
  const { userID, commentID } = req.body;

  const { results, error } = await database.query(COMMENT_LIKED_BY_QUERYS.SELECT_COMMENT_LIKE, [
    userID,
    commentID
  ]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (results[0]) {
    const data = commentLikeDislikeStatus.liked;
    return response.OK(`Like status is: ${data}`, data);
  } else if (!results[0]) {
    return await checkCommentDislikeStatus(userID, commentID);
  }
};

async function checkCommentDislikeStatus(userID, commentID) {
  const { results, error } = await database.query(
    COMMENT_DISLIKED_BY_QUERYS.SELECT_COMMENT_DISLIKE,
    [userID, commentID]
  );

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (results[0]) {
    const data = commentLikeDislikeStatus.disliked;
    return response.OK(`Like status is: ${data}`, data);
  } else if (!results[0]) {
    const data = commentLikeDislikeStatus.none;
    return response.OK(`Like status is: ${data}`, data);
  }
}

export const getCommentsForPost = async (req) => {
  const { postId } = req.params;
  let { results, error } = await database.query(QUERYS.SELECT_COMMENTS_FOR_POST(postId));
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.OK(`No comments for selected post`);
  }

  return await getCommentFiles(results);
};

async function getCommentFiles(comments) {
  for (let comment of comments) {
    const { results: commentFiles, error } = await database.query(
      FILE_QUERYS.SELECT_FILES_FOR_COMMENT,
      comment.id
    );
    if (error) {
      return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
    }
    comment.files = !commentFiles ? [] : commentFiles;
  }

  return response.OK(`Comments retrieved`, comments);
}

export const createComment = async (req) => {
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
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    const commentID = results.insertId;

    return response.CREATED(`Post created`, commentID);
  }
};
