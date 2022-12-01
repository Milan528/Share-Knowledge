const QUERY = {
  SELECT_POSTS: 'SELECT * FROM post limit ?,?',
  SELECT_POST: 'SELECT * FROM post WHERE id = ?',
  CREATE_POST: 'INSERT INTO post(title, text, type, date, userId) VALUES (?, ?, ?, ?, ?)',
  UPDATE_POST: 'UPDATE post SET title = ?, text = ?, type = ?, date = ?, userId = ? WHERE id = ?',
  DELETE_POST: 'DELETE FROM post WHERE id = ?',
  SELECT_SPECIFIC_POSTS_TAGS: getSpecificPostsTags,
  SELECT_SPECIFIC_POSTS_IDS: getSpecificPostsIds,
  SELECT_FILTERED_POSTS: getFilteredPosts,
  SELECT_SUGGESTIONS: getSuggestions
};

function getSuggestions(searchParams) {
  let sql = `SELECT title,text FROM post where (lower(title) LIKE "%${searchParams}%" or lower(text) LIKE "%${searchParams}%") `;

  return sql;
}

function getFilteredPosts(tags, search, startIndex, count, type) {
  let sql = '';
  sql += 'Select id, text, title, type, likes, date, group_concat(tagId) as tags ';
  sql += 'from ( ';

  let sql1 = '';
  sql1 += 'SELECT myTable2.id,text,title,type,likes, date,tagId ';
  sql1 += 'FROM ( ';

  let sql2 = '';
  sql2 += 'select id, title, text, type, date, postId, COUNT(*) AS likes ';
  sql2 += 'from post ';
  sql2 += 'join postLikedBy ';
  sql2 += 'ON post.id=postLikedBy.postId ';
  sql2 += 'GROUP BY id';

  sql1 += sql2;
  sql1 += ` ) as myTable2 `;
  sql1 += 'JOIN post_tag ON myTable2.id=post_tag.postId ';
  sql1 += `where type in(`;
  if (type && (type === 'q' || type === 'a')) {
    sql1 += `'${type}'`;
  } else {
    sql1 += `'a','q'`;
  }
  sql1 += ') ';

  if (search && search.trim() !== '') {
    // sql += `and (title LIKE '%${search}%' or text LIKE '%${search}%') `;
    sql1 += `and MATCH(title,text) AGAINST('${search}*' IN BOOLEAN MODE)`;
  }

  if (tags.length > 0) {
    sql1 += `and tagId in ('${tags[0]}'`;
    for (let i = 1; i < tags.length; i++) {
      sql1 += `,'${tags[i]}'`;
    }
    sql1 += `) `;
  }

  sql += sql1;
  sql += ` ) as myTable `;

  sql += `group by id limit ${startIndex},${count};`;

  console.log(sql);
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
