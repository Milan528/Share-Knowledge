const QUERY = {
  SELECT_POSTS: 'SELECT * FROM post limit ?,?',
  SELECT_POST: 'SELECT * FROM post WHERE id = ?',
  CREATE_POST: 'INSERT INTO post(title, text, type, date, userId) VALUES (?, ?, ?, ?, ?)',
  UPDATE_POST: 'UPDATE post SET title = ?, text = ?, type = ?, date = ?, userId = ? WHERE id = ?',
  DELETE_POST: 'DELETE FROM post WHERE id = ?',
  SELECT_SPECIFIC_POSTS_TAGS: getSpecificPostsTags,
  SELECT_SPECIFIC_POSTS_IDS: getSpecificPostsIds,
  SELECT_FILTERED_POSTS: getFilteredPosts,
  // SELECT_SUGGESTIONS: 'SELECT title,text FROM post where (title LIKE "%?%" or text LIKE "%?%") '
  SELECT_SUGGESTIONS: getSuggestions
};

function getSuggestions(searchParams) {
  let sql = `SELECT title,text FROM post where (lower(title) LIKE "%${searchParams}%" or lower(text) LIKE "%${searchParams}%") `;

  return sql;
}

function getFilteredPosts(tags, search, startIndex, count, type) {
  let sql = '';
  sql += 'Select id, text, title, type, likes,date, group_concat(tagId) as tags ';
  sql += 'from (SELECT post.id,text,title,type,likes,date,tagId ';
  sql += 'FROM post ';
  sql += 'JOIN post_tag ON post.id=post_tag.postId ';
  sql += `where type in(`;
  if (type && (type === 'q' || type === 'a')) {
    sql += `'${type}'`;
  } else {
    sql += `'a','q'`;
  }
  sql += ') ';
  if (search && search !== '') {
    sql += `and (title LIKE '%${search}%' or text LIKE '%${search}%') `;
  }

  if (tags.length > 0) {
    sql += `and tagId in ('${tags[0]}'`;
    for (let i = 1; i < tags.length; i++) {
      sql += `,'${tags[i]}'`;
    }
    sql += `) `;
  }

  sql += `) as myTable `;
  sql += `group by id limit ${startIndex},${count};`;

  return sql;
}

function getSpecificPostsTags(tags) {
  let sql;
  sql = `SELECT DISTINCT postID FROM post_tag WHERE tagId in ('${tags[0]}'`;
  for (let i = 1; i < tags.length; i++) {
    sql += `,'${tags[i]}'`;
  }
  sql += `) `;
  return sql;
}

function getSpecificPostsIds(ids, startIndex, count) {
  let sql;
  sql = `SELECT * FROM post WHERE id in ('${ids[0]}'`;
  for (let i = 1; i < ids.length; i++) {
    sql += `,'${ids[i]}'`;
  }
  sql += `)  limit ${startIndex},${count}`;
  return sql;
}
export default QUERY;
