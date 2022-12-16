const QUERY = {
  SELECT_POST_DISLIKE: 'SELECT * FROM postDislikedBy WHERE userId = ? AND postId = ?',
  CREATE_POST_DISLIKE: 'INSERT INTO postDislikedBy(userId, postId) VALUES (?,?)',
  DELETE_POST_DISLIKE: 'DELETE FROM postDislikedBy WHERE userId = ? AND postId = ?'
};

export default QUERY;
