const orderSql = {
  newest: 'date DESC',
  like: 'likes DESC',
  dislike: 'dislikes DESC'
};

const QUERY = {
  CREATE_POST: 'INSERT INTO post(title, text, type, userId, date) VALUES (?, ?, ?, ?, ?)',
  UPDATE_POST: 'UPDATE post SET title = ?, text = ?, type = ?, date = ?, userId = ? WHERE id = ?',
  DELETE_POST: 'DELETE FROM post WHERE id = ?',

  SELECT_POSTS_BY_USERNAME: (username, order) => {
    let sql = 'SELECT * FROM ( ';
    sql += selectPostsWithLikesAndDislikes(
      selectPostsWithLikes(selectSinglePostWithoutLikesAndDislikesByUsername(username)),
      selectPostsWithDislikes(selectSinglePostWithoutLikesAndDislikesByUsername(username))
    );
    sql += `order by ${orderSql[order]} `;
    sql += ') as orderedTable ';
    return sql;
  },

  SELECT_POST_BY_POSTID: (postId) => {
    let sql = '';
    sql += 'Select id, text, title, type, likes, dislikes,  date, group_concat(tagId) as tags ';
    sql += 'from ( ';

    let sql1 = '';
    sql1 += 'SELECT myTable2.id,text,title,type,likes, dislikes, date,tagId ';
    sql1 += 'FROM ( ';

    sql1 += selectSinglePostWithLikesAndDislikes(postId);
    sql1 += `) as myTable2 `;
    sql1 += 'JOIN post_tag ON myTable2.id=post_tag.postId ';

    sql += sql1;
    sql += ` ) as myTable `;
    sql += `group by id `;

    return sql;
  },

  SELECT_FILTERED_POSTS: (tags, search, startIndex, count, type, order) => {
    let sql = 'SELECT * FROM ( ';
    sql += filterByTagsSeachTypePostsWithLikesAndDislikes(
      tags,
      selectPostsWithLikesAndDislikes(
        selectPostsWithLikes(filterByTypeSearchPostsWithoutLikesAndDislikes(type, search)),
        selectPostsWithDislikes(filterByTypeSearchPostsWithoutLikesAndDislikes(type, search))
      )
    );
    sql += `order by ${orderSql[order]} `;
    sql += ') as tableToLimit ';
    sql += `limit ${startIndex},${count}; `;
    return sql;
  },

  SELECT_TOTAL_NUMBER_OF_PAGES_FOR_SPECIFICS_POSTS: (tags, search, type) => {
    let sql = '';
    sql += 'select count(*) as totalRows ';
    sql += 'from ( ';
    sql += filterByTagsSeachTypePostsWithLikesAndDislikes(
      tags,
      selectPostsWithLikesAndDislikes(
        selectPostsWithLikes(filterByTypeSearchPostsWithoutLikesAndDislikes(type, search)),
        selectPostsWithDislikes(filterByTypeSearchPostsWithoutLikesAndDislikes(type, search))
      )
    );
    sql += ') as myTable3 ';
    return sql;
  },

  SELECT_SPECIFIC_POSTS_TAGS: (tags) => {
    let sql;
    sql = `SELECT DISTINCT postID FROM post_tag WHERE tagId in ('${tags[0]}'`;
    for (let i = 1; i < tags.length; i++) {
      sql += `,'${tags[i]}'`;
    }
    sql += `) `;
    return sql;
  },

  SELECT_SPECIFIC_POSTS_IDS: (ids, startIndex, count) => {
    let sql;
    sql = `SELECT * FROM post WHERE id in ('${ids[0]}'`;
    for (let i = 1; i < ids.length; i++) {
      sql += `,'${ids[i]}'`;
    }
    sql += `)  limit ${startIndex},${count}`;
    return sql;
  }
};

export default QUERY;

/******************************HELPERS_SINGLE_POST******************************/
function selectSinglePostWithLikesAndDislikes(postId) {
  let sql = '';
  sql +=
    'SELECT postWithLikes.id, postWithLikes.title, postWithLikes.text, postWithLikes.type, postWithLikes.date, postWithLikes.likes, postWithDislikes.dislikes ';
  sql += 'FROM ( ';
  sql += selectSinglePostWithLikes(postId);
  sql += ') as postWithLikes ';
  sql += 'join ( ';
  sql += selectSinglePostWithDislikes(postId);
  sql += ') postWithDislikes ';
  sql += 'on postWithLikes.id=postWithDislikes.id ';

  return sql;
}

function selectSinglePostWithLikes(postId) {
  let sql2 = '';
  sql2 += 'select id, title, text, type, date, SUM(if(likedPostId=0,0,1)) AS likes  ';
  sql2 += 'from ( ';

  let sql3 = '';
  sql3 += 'SELECT id, title, text, type, date, COALESCE(postId, 0) as likedPostId ';
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
  sql2 += 'select id, title, text, type, date, SUM(if(dislikedPostId=0,0,1)) AS dislikes  ';
  sql2 += 'from ( ';

  let sql3 = '';
  sql3 += 'SELECT id, title, text, type, date, COALESCE(postId, 0) as dislikedPostId ';
  sql3 += 'from post ';
  sql3 += 'left join postDislikedBy  ';
  sql3 += 'ON post.id=postDislikedBy.postId ';
  sql3 += `WHERE id = ${postId} `;

  sql2 += sql3;
  sql2 += ') as myTable10 ';
  sql2 += 'GROUP BY id ';

  return sql2;
}

function selectSinglePostWithoutLikesAndDislikesByUsername(username) {
  let sql = '';
  sql += 'select post.id, post.title, post.text, post.type, post.date, post.userId ';
  sql += 'from post ';
  sql += 'join user ';
  sql += 'on user.id=post.userId ';
  sql += `where user.username='${username}' `;

  return sql;
}

/******************************HELPERS_MANY_POSTS******************************/
function filterByTagsSeachTypePostsWithLikesAndDislikes(tags, sqlSelectPostsWithLikesAndDislikes) {
  let sql = '';
  sql += 'Select id, text, title, type, likes, dislikes, date, group_concat(tagId) as tags ';
  sql += 'from ( ';

  let sql1 = '';
  sql1 += 'SELECT myTable2.id,text,title,type,likes,dislikes, date,tagId ';
  sql1 += 'FROM ( ';

  sql1 += sqlSelectPostsWithLikesAndDislikes;
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

function selectPostsWithLikesAndDislikes(sqlSelectPostsWithLikes, selectPostsWithDislikes) {
  let sql = '';
  sql +=
    'SELECT postsWithLikes.id, postsWithLikes.title, postsWithLikes.text, postsWithLikes.type, postsWithLikes.date, postsWithLikes.likes, postsWithDislikes.dislikes ';
  sql += 'FROM ( ';
  sql += sqlSelectPostsWithLikes;
  sql += ') as postsWithLikes ';
  sql += 'join ( ';
  sql += selectPostsWithDislikes;
  sql += ') postsWithDislikes ';
  sql += 'on postsWithLikes.id=postsWithDislikes.id ';

  return sql;
}

function selectPostsWithLikes(sqlFilterByTypeSearchPostsWithoutLikesAndDislikes) {
  let sql2 = '';
  sql2 += 'SELECT id, title, text, type, date, SUM(if(likedPostId=0,0,1)) AS likes  ';
  sql2 += 'FROM (  ';

  let sql3 = '';
  sql3 += 'SELECT id, title, text, type, date, COALESCE(postId, 0) as likedPostId ';
  sql3 += 'FROM ( ';

  sql3 += sqlFilterByTypeSearchPostsWithoutLikesAndDislikes;
  sql3 += `) as myTable4 `;
  sql3 += `left join postLikedBy `;
  sql3 += `on myTable4.id=postLikedBy.postId `;

  sql2 += sql3;

  sql2 += ') as myTable3 ';
  sql2 += 'GROUP BY id, text, date, likedPostId ';

  return sql2;
}

function selectPostsWithDislikes(sqlFilterByTypeSearchPostsWithoutLikesAndDislikes) {
  let sql2 = '';
  sql2 += 'SELECT id, title, text, type, date, SUM(if(dislikedPostId=0,0,1)) AS dislikes  ';
  sql2 += 'FROM (  ';

  let sql3 = '';
  sql3 += 'SELECT id, title, text, type, date, COALESCE(postId, 0) as dislikedPostId ';
  sql3 += 'FROM ( ';

  sql3 += sqlFilterByTypeSearchPostsWithoutLikesAndDislikes;
  sql3 += `) as myTable4 `;
  sql3 += `left join postDislikedBy `;
  sql3 += `on myTable4.id=postDislikedBy.postId `;

  sql2 += sql3;

  sql2 += ') as myTable3 ';
  sql2 += 'GROUP BY id, text, date, dislikedPostId ';

  return sql2;
}

function filterByTypeSearchPostsWithoutLikesAndDislikes(type, search) {
  let sql4 = '';
  sql4 += 'SELECT * FROM post where type in( ';

  if (type && (type === 'question' || type === 'material')) {
    sql4 += `'${type}'`;
  } else {
    sql4 += `'material','question'`;
  }

  sql4 += ') ';

  if (search && search.trim() !== '') {
    // sql4 += `and (title LIKE '%${search}%' or text LIKE '%${search}%') `;
    sql4 += `and MATCH(title,text) AGAINST('${search}*' IN BOOLEAN MODE) `;
  }

  return sql4;
}
