const QUERY = {
  SELECT_COMMENT_LIKE: 'SELECT * FROM commentLikedBy WHERE userId = ? AND commentId = ?',
  CREATE_COMMENT_LIKE: 'INSERT INTO commentLikedBy(userId, commentId) VALUES (?,?)',
  DELETE_COMMENT_LIKE: 'DELETE FROM commentLikedBy WHERE userId = ? AND commentId = ?'
};

export default QUERY;
