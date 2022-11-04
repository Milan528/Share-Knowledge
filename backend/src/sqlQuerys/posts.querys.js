const QUERY = {
  SELECT_POSTS: 'SELECT * FROM post',
  SELECT_POST: 'SELECT * FROM post WHERE id = ?',
  CREATE_POST: 'INSERT INTO post(title, text, type, date, userId) VALUES (?, ?, ?, ?, ?)',
  UPDATE_POST: 'UPDATE post SET title = ?, text = ?, type = ?, date = ?, userId = ? WHERE id = ?',
  DELETE_POST: 'DELETE FROM post WHERE id = ?',
  SELECT_POSTS_WITH_TAGS: get_posts_with_required_tags
};

function get_posts_with_required_tags(tags) {
  let innerSQL;
  innerSQL = `SELECT postID, COUNT(*) AS tags_count `;
  innerSQL += `FROM post_tag `;
  innerSQL += `WHERE tagId in ('${tags[0]}'`;
  for (let i = 1; i < tags.length; i++) {
    innerSQL += `,'${tags[i]}'`;
  }
  innerSQL += `) `;
  innerSQL += `GROUP BY postId `;

  sql = `SELECT postID `;
  sql += `FROM ( ${innerSQL} ) AS posts_with_required_tags `;
  sql += `WHERE tags_count=${tags.length}`;

  return sql;
}
export default QUERY;
