const QUERY = {
  SELECT_TAGS: 'SELECT * FROM tags',
  SELECT_TAG_BY_ID: 'SELECT * FROM tags WHERE id=?',
  SELECT_TAGS_FOR_POST: `SELECT tag,tagId FROM post_tag INNER JOIN tags ON tags.id = post_tag.tagId where postId=?;`,
  CREATE_TAG: 'INSERT INTO tags(tag) VALUES (?)',
  DELETE_TAG: 'DELETE FROM tags WHERE id = ?',
  SELECT_TAGS_FOR_POST_ID: `SELECT * FROM post_tag join tags on tagId=tags.id  where postId= ?`
};

export default QUERY;
