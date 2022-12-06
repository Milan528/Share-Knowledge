const QUERY = {
  CREATE_POST_TAG: 'INSERT INTO post_tag(postId,tagId) VALUES (?,?)',
  DELETE_TAG: 'DELETE FROM tags WHERE id = ?'
};

export default QUERY;
