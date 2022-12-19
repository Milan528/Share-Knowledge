const orderSql = {
  newest: 'date DESC',
  like: 'likes DESC',
  dislike: 'dislikes DESC'
};

const QUERY = {
  /*********************************ONE*********************************/
  CREATE_POST: 'INSERT INTO post(title, text, type, userId, date) VALUES (?, ?, ?, ?, ?)',
  UPDATE_POST: 'UPDATE post SET title = ?, text = ?, type = ?, date = ?, userId = ? WHERE id = ?',
  DELETE_POST: 'DELETE FROM post WHERE id = ?',
  SELECT_POST_BY_POSTID,

  /*********************************MANY*********************************/

  SELECT_POSTS_BY_USERNAME,
  SELECT_POSTS_FOR_HOMEPAGE_FILTERS,
  SELECT_TOTAL_NUMBER_OF_PAGES_FOR_HOME_PAGE_FILTERS,
  SELECT_SPECIFIC_POSTS_TAGS,
  SELECT_SPECIFIC_POSTS_IDS
};

export default QUERY;

/*********************************ONE*********************************/

function SELECT_POST_BY_POSTID(postId) {
  let sql =
    'Select postWithNoUsername.id, text, title, type, likes, dislikes,  date, userId, tags, username as postedBy ';
  sql += `from (`;
  sql +=
    'Select id, text, title, type, likes, dislikes,  date, userId ,group_concat(tagId) as tags ';
  sql += 'from ( ';

  let sql1 = '';
  sql1 += 'SELECT myTable2.id,text,title,type,likes, dislikes, date,tagId ,userId ';
  sql1 += 'FROM ( ';

  sql1 += selectSinglePostWithLikesAndDislikes(
    selectSinglePostWithLikes(postId),
    selectSinglePostWithDislikes(postId)
  );
  sql1 += `) as myTable2 `;
  sql1 += 'JOIN post_tag ON myTable2.id=post_tag.postId ';
  sql += sql1;
  sql += ` ) as myTable `;
  sql += `group by id `;
  sql += `) as postWithNoUsername `;
  sql += 'join user ';
  sql += 'ON postWithNoUsername.userId=user.id ';

  return sql;
}

/* - - - - - - - - - - - - - - -HELPERS- - - - - - - - - - - - - - - */
function selectSinglePostWithLikesAndDislikes(
  tableOfSinglePostWithLikes,
  tableOfSinglePostWithDislikes
) {
  let sql = '';
  sql +=
    'SELECT postWithLikes.id, postWithLikes.title, postWithLikes.text, postWithLikes.type, postWithLikes.date, postWithLikes.likes, postWithDislikes.dislikes, postWithLikes.userId ';
  sql += 'FROM ( ';
  sql += tableOfSinglePostWithLikes;
  sql += ') as postWithLikes ';
  sql += 'join ( ';
  sql += tableOfSinglePostWithDislikes;
  sql += ') postWithDislikes ';
  sql += 'on postWithLikes.id=postWithDislikes.id ';

  return sql;
}

function selectSinglePostWithLikes(postId) {
  let sql2 = '';
  sql2 += 'select id, title, text, type, date, userId ,SUM(if(likedPostId=0,0,1)) AS likes  ';
  sql2 += 'from ( ';

  let sql3 = '';
  sql3 += 'SELECT id, title, text, type, date, post.userId, COALESCE(postId, 0) as likedPostId ';
  sql3 += 'from post ';
  sql3 += 'left join postLikedBy  ';
  sql3 += 'ON post.id=postLikedBy.postId ';
  sql3 += `WHERE id = ${postId} `;

  sql2 += sql3;
  sql2 += ') as myTable10 ';
  sql2 += 'GROUP BY id ';

  return sql2;
}

function selectSinglePostWithDislikes(postId) {
  let sql2 = '';
  sql2 += 'select id, title, text, type, date, userId, SUM(if(dislikedPostId=0,0,1)) AS dislikes  ';
  sql2 += 'from ( ';

  let sql3 = '';
  sql3 += 'SELECT id, title, text, type, date, post.userId, COALESCE(postId, 0) as dislikedPostId ';
  sql3 += 'from post ';
  sql3 += 'left join postDislikedBy  ';
  sql3 += 'ON post.id=postDislikedBy.postId ';
  sql3 += `WHERE id = ${postId} `;

  sql2 += sql3;
  sql2 += ') as myTable10 ';
  sql2 += 'GROUP BY id ';

  return sql2;
}

/*********************************MANY*********************************/

function SELECT_POSTS_BY_USERNAME(username, order) {
  let sql = 'SELECT * FROM ( ';
  sql += selectPostsWithLikesAndDislikes(
    selectPostsWithLikes(selectPostsWithoutLikesAndDislikesByUsername(username)),
    selectPostsWithDislikes(selectPostsWithoutLikesAndDislikesByUsername(username))
  );

  sql += `order by ${orderSql[order]} `;
  sql += ') as orderedTable ';
  return sql;
}

function SELECT_POSTS_FOR_HOMEPAGE_FILTERS(tags, search, startIndex, count, type, order) {
  let sql =
    'SELECT t.id, t.text, t.title, t.type, t.likes, t.dislikes, t.date, t.userId, t.username as postedBy, t.tags ';
  sql += 'FROM ( ';
  sql += filterByTagsPostsWithLikesAndDislikes(
    tags,
    selectPostsWithLikesAndDislikes(
      selectPostsWithLikes(filterByTypeSearchPostsWithoutLikesAndDislikes(type, search)),
      selectPostsWithDislikes(filterByTypeSearchPostsWithoutLikesAndDislikes(type, search))
    )
  );
  sql += `order by ${orderSql[order]} `;
  sql += ') as t ';
  sql += `limit ${startIndex},${count}; `;
  return sql;
}

function SELECT_TOTAL_NUMBER_OF_PAGES_FOR_HOME_PAGE_FILTERS(tags, search, type) {
  let sql = '';
  sql += 'select count(*) as totalRows ';
  sql += 'from ( ';
  sql += filterByTagsPostsWithLikesAndDislikes(
    tags,
    selectPostsWithLikesAndDislikes(
      selectPostsWithLikes(filterByTypeSearchPostsWithoutLikesAndDislikes(type, search)),
      selectPostsWithDislikes(filterByTypeSearchPostsWithoutLikesAndDislikes(type, search))
    )
  );
  sql += ') as myTable3 ';

  return sql;
}

function SELECT_SPECIFIC_POSTS_TAGS(tags) {
  let sql;
  sql = `SELECT DISTINCT postID FROM post_tag WHERE tagId in ('${tags[0]}'`;
  for (let i = 1; i < tags.length; i++) {
    sql += `,'${tags[i]}'`;
  }
  sql += `) `;
  return sql;
}

function SELECT_SPECIFIC_POSTS_IDS(ids, startIndex, count) {
  let sql;
  sql = `SELECT * FROM post WHERE id in ('${ids[0]}'`;
  for (let i = 1; i < ids.length; i++) {
    sql += `,'${ids[i]}'`;
  }
  sql += `)  limit ${startIndex},${count}`;
  return sql;
}

/* - - - - - - - - - - - - - - -HELPERS- - - - - - - - - - - - - - - */
function filterByTagsPostsWithLikesAndDislikes(tags, tableOfPostsWithLikesAndDislikes) {
  let sql = '';
  sql +=
    'Select id, text, title, type, likes, dislikes, date, userId, username, group_concat(tagId) as tags ';
  sql += 'from ( ';

  let sql1 = '';
  sql1 += 'SELECT myTable2.id,text,title,type,likes,dislikes, date, userId, username, tagId ';
  sql1 += 'FROM ( ';

  sql1 += tableOfPostsWithLikesAndDislikes;
  sql1 += `) as myTable2 `;
  sql1 += 'JOIN post_tag ON myTable2.id=post_tag.postId ';

  if (tags.length > 0) {
    sql1 += `where tagId in ('${tags[0]}'`;
    for (let i = 1; i < tags.length; i++) {
      sql1 += `,'${tags[i]}'`;
    }
    sql1 += `) `;
  }

  sql += sql1;
  sql += ` ) as myTable `;
  sql += `group by id, text, title, type, likes, dislikes, date `;

  return sql;
}

function filterByTypeSearchPostsWithoutLikesAndDislikes(type, search) {
  let sql4 = '';
  sql4 += 'SELECT post.id, post.title, post.text, post.type, post.date, post.userId, username ';
  sql4 += 'FROM post ';
  sql4 += 'join user ';
  sql4 += 'on post.userId=user.id ';

  sql4 += 'where type in( ';

  if (type && (type === 'question' || type === 'material')) {
    sql4 += `'${type}'`;
  } else {
    sql4 += `'material','question'`;
  }

  sql4 += ') ';

  if (search && search.trim() !== '') {
    sql4 += `and MATCH(title,text) AGAINST('${search}*' IN BOOLEAN MODE) `;
  }

  return sql4;
}

function selectPostsWithLikesAndDislikes(tableOfPostsWithLikes, tableOfPostsWithDislikes) {
  let sql = '';
  sql +=
    'SELECT postsWithLikes.id, postsWithLikes.title, postsWithLikes.text, postsWithLikes.type, postsWithLikes.date, postsWithLikes.likes, postsWithDislikes.dislikes, postsWithDislikes.username, postsWithDislikes.userId ';
  sql += 'FROM ( ';
  sql += tableOfPostsWithLikes;
  sql += ') as postsWithLikes ';
  sql += 'join ( ';
  sql += tableOfPostsWithDislikes;
  sql += ') postsWithDislikes ';
  sql += 'on postsWithLikes.id=postsWithDislikes.id ';
  return sql;
}

function selectPostsWithLikes(tableOfPostsWithoutLikes) {
  let sql2 = '';
  sql2 +=
    'SELECT id, title, text, type, date, username, userId, SUM(if(likedPostId=0,0,1)) AS likes  ';
  sql2 += 'FROM (  ';

  let sql3 = '';
  sql3 +=
    'SELECT id, title, text, type, date, username, myTable4.userId, COALESCE(postId, 0) as likedPostId ';
  sql3 += 'FROM ( ';

  sql3 += tableOfPostsWithoutLikes;
  sql3 += `) as myTable4 `;
  sql3 += `left join postLikedBy `;
  sql3 += `on myTable4.id=postLikedBy.postId `;

  sql2 += sql3;

  sql2 += ') as myTable3 ';
  sql2 += 'GROUP BY id, text, date, username, likedPostId ';

  return sql2;
}

function selectPostsWithDislikes(tableOfPostsWithoutDislikes) {
  let sql2 = '';
  sql2 +=
    'SELECT id, title, text, type, date, username, userId, SUM(if(dislikedPostId=0,0,1)) AS dislikes  ';
  sql2 += 'FROM (  ';

  let sql3 = '';
  sql3 +=
    'SELECT id, title, text, type, date, username, myTable4.userId, COALESCE(postId, 0) as dislikedPostId ';
  sql3 += 'FROM ( ';

  sql3 += tableOfPostsWithoutDislikes;
  sql3 += `) as myTable4 `;
  sql3 += `left join postDislikedBy `;
  sql3 += `on myTable4.id=postDislikedBy.postId `;

  sql2 += sql3;

  sql2 += ') as myTable3 ';
  sql2 += 'GROUP BY id, text, date, username, dislikedPostId ';

  return sql2;
}

function selectPostsWithoutLikesAndDislikesByUsername(username) {
  let sql = '';
  sql += 'select post.id, post.title, post.text, post.type, post.date, post.userId, username ';
  sql += 'from post ';
  sql += 'join user ';
  sql += 'on user.id=post.userId ';
  sql += `where user.username='${username}' `;

  return sql;
}
