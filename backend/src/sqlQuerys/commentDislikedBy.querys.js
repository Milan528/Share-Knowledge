const QUERY = {
  SELECT_COMMENT_DISLIKE: 'SELECT * FROM commentDislikedBy WHERE userId = ? AND commentId = ?',
  CREATE_COMMENT_DISLIKE: 'INSERT INTO commentDislikedBy(userId, commentId) VALUES (?,?)',
  DELETE_COMMENT_DISLIKE: 'DELETE FROM commentDislikedBy WHERE userId = ? AND commentId = ?'
};

export default QUERY;
