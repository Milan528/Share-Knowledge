const QUERY = {
  SELECT_TAGS: 'SELECT * FROM tags',
  SELECT_TAG_BY_ID: 'SELECT * FROM tags WHERE id=?',
  SELECT_TAGS_FOR_POST: `SELECT tag,tagId FROM post_tag INNER JOIN tags ON tags.id = post_tag.tagId where postId=?;`
};

export default QUERY;
