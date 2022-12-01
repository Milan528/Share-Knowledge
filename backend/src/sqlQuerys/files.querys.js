const QUERY = {
  CREATE_FILE_FOR_POST: 'INSERT INTO post_file(path, ext, postId) VALUES (?, ?, ?)',
  SELECT_FILES_FOR_POST: `SELECT * from post_file WHERE postId = ?`,
  SELECT_FILES_FOR_COMMENT: `SELECT * from comment_file WHERE commentId = ?`
};

export default QUERY;
