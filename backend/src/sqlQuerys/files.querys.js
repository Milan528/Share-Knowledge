const QUERY = {
  CREATE_FILE: 'INSERT INTO file(path, ext, postId) VALUES (?, ?, ?)',
  SELECT_FILES_FOR_POST: `SELECT * from file WHERE postId = ?`
};

export default QUERY;
