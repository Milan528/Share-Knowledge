const QUERY = {
  SELECT_POST_LIKE: 'SELECT * FROM postLikedBy WHERE userId = ? AND postId = ?',
  CREATE_POST_LIKE: 'INSERT INTO postLikedBy(userId, postId) VALUES (?,?)',
  DELETE_POST_LIKE: 'DELETE FROM postLikedBy WHERE userId = ? AND postId = ?'
};

export default QUERY;
