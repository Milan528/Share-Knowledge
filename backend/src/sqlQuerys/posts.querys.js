const QUERY = {
  SELECT_POSTS: 'SELECT * FROM post',
  SELECT_POST: 'SELECT * FROM post WHERE id = ?',
  CREATE_POST: 'INSERT INTO post(title, text, type, date, userId) VALUES (?, ?, ?, ?, ?)',
  UPDATE_POST: 'UPDATE post SET title = ?, text = ?, type = ?, date = ?, userId = ? WHERE id = ?',
  DELETE_POST: 'DELETE FROM post WHERE id = ?'
  // CREATE_POST_PROCEDURE: 'CALL create_and_return(?, ?, ?, ?, ?, ?, ?)'
};

export default QUERY;
