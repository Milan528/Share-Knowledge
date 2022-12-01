import QUERYS from '../sqlQuerys/comments.querys.js';
import FILE_QUERYS from '../sqlQuerys/files.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';

export const getCommentsForPost = async (req, res) => {
  let { postId } = req.body;
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
