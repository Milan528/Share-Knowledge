import QUERYS from '../sqlQuerys/comments.querys.js';
import FILE_QUERYS from '../sqlQuerys/files.querys.js';
import database from '../tools/database.js';
import { getTodaysDate } from '../tools/dateFormater.js';
import COMMENT_LIKED_BY_QUERYS from '../sqlQuerys/commentLikedBy.querys.js';
import COMMENT_DISLIKED_BY_QUERYS from '../sqlQuerys/commentDislikedBy.querys.js';
import response from '../tools/response/index.js';
import tokenValidation from '../tools/tokenValidation.js';
import { commentLikeDislikeStatus } from '../tools/enums.js';
import { removeCommentFiles } from './fileServices.js';
import COMMENT_REPORT_QUERYS from '../sqlQuerys/commentReportedBy.querys.js';
import services from './index.js';
import HttpStatus from '../tools/response/httpStatus.js';

const getCommentLikeDislikeStatusAndOwnership = async (req, comments) => {
  tokenValidation(req, null, () => {});
  const userID = req.body.userID;

  if (userID) {
    for (let comment of comments) {
      const commentID = comment.id;

      const { results: likedResults, error: likesError } = await database.query(
        COMMENT_LIKED_BY_QUERYS.SELECT_COMMENT_LIKE,
        [userID, commentID]
      );

      if (likesError) {
        return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
      } else if (likedResults[0]) {
        comment.likeStatus = commentLikeDislikeStatus.liked;
      } else if (!likedResults[0]) {
        const { results: dislikeResults, error: dislikeError } = await database.query(
          COMMENT_DISLIKED_BY_QUERYS.SELECT_COMMENT_DISLIKE,
          [userID, commentID]
        );

        if (dislikeError) {
          return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
        } else if (dislikeResults[0]) {
          comment.likeStatus = commentLikeDislikeStatus.disliked;
        } else if (!dislikeResults[0]) {
          comment.likeStatus = commentLikeDislikeStatus.none;
        }
      }

      if (comment.userId === userID) comment.owner = true;
      else comment.owner = false;
    }
  }
  return await getCommentFiles(comments);
};

export const getCommentsForPost = async (req) => {
  const { postId } = req.params;

  let { results, error } = await database.query(QUERYS.SELECT_COMMENTS_FOR_POST(postId));
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.OK(`No comments for selected post`);
  }

  return await getCommentLikeDislikeStatusAndOwnership(req, results);
};

export const deleteComment = async (req) => {
  const { results, error } = await database.query(QUERYS.DELETE_COMMENT, [req.params.id]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    await removeCommentFiles(req.params.id);
    return response.OK(`Comment deleted`, [req.params.id]);
  }
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

const getCommentById = async (req) => {
  let { results, error } = await database.query(QUERYS.SELECT_COMMENT_BY_ID(req.params.id));
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.OK(`No comment found`);
  }

  return await getCommentLikeDislikeStatusAndOwnership(req, results);
};

export const getReportedComments = async (req) => {
  let { results, error } = await database.query(COMMENT_REPORT_QUERYS.SELECT_REPORTED_COMMENTS);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.NOT_FOUND(`No repported comments`);
  } else {
    let commentArray = [];
    for (let reportEtnry of results) {
      req.params.id = reportEtnry.commentId;
      let res = await getCommentById(req);

      if (res.statusCode === HttpStatus.OK.code) {
        const comment = res.data[0];
        comment.reportedById = reportEtnry.reportedById;
        commentArray.push(comment);
      } else {
        return res;
      }
    }
    return response.OK('Reported comments', commentArray);
  }
};

export const reportComment = async (req) => {
  const { postedBy, commentID, userID } = req.body;

  const { results, error } = await database.query(COMMENT_REPORT_QUERYS.SELECT_REPORTED_COMMENT, [
    userID,
    commentID
  ]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results[0]) {
    const res = await services.userServices.getUserByUsername(postedBy);
    if (res.statusCode === HttpStatus.OK.code) {
      const postedByID = res.data.id;
      return await addReportCommentEntry(commentID, postedByID, userID);
    } else {
      return res;
    }
  } else {
    return response.OK(`Already reported`);
  }
};

async function addReportCommentEntry(commentId, postedById, reportedById) {
  const { results, error } = await database.query(COMMENT_REPORT_QUERYS.CREATE_REPORT_COMMENT, [
    reportedById,
    commentId,
    postedById
  ]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  }

  return response.CREATED(`Comment created`, commentId);
}

export const dismissReport = async (req) => {
  const { results, error } = await database.query(COMMENT_REPORT_QUERYS.DELETE_REPORT, [
    req.params.reportedById,
    req.params.commentId
  ]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.OK('Report dissmised', [req.params.commentId]);
  }
};
