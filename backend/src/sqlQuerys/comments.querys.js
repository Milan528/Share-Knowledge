const QUERY = {
  CREATE_COMMENT: 'INSERT INTO comment(text, date, postId, userId) VALUES (?, ?, ?,?)',
  SELECT_COMMENTS_FOR_POST
};

export default QUERY;

/*********************************ONE*********************************/

/* - - - - - - - - - - - - - - -HELPERS- - - - - - - - - - - - - - - */

/*********************************MANY*********************************/

function SELECT_COMMENTS_FOR_POST(postId) {
  let sql = '';
  sql += selectCommentsWithLikesAndDislikes(
    selectCommentsWithLikes(postId),
    selectCommentsWithDislikes(postId)
  );

  return sql;
}

/* - - - - - - - - - - - - - - -HELPERS- - - - - - - - - - - - - - - */

function selectCommentsWithLikesAndDislikes(tableOfCommentsWithLikes, tableOfCommentsWithDislikes) {
  let sql = '';
  sql +=
    'SELECT commentsWithLikes.id, commentsWithLikes.text, commentsWithLikes.date, commentsWithLikes.likes, commentsWithDislikes.dislikes ';
  sql += 'FROM ( ';
  sql += tableOfCommentsWithLikes;
  sql += ') as commentsWithLikes ';
  sql += 'join ( ';
  sql += tableOfCommentsWithDislikes;
  sql += ') commentsWithDislikes ';
  sql += 'on commentsWithLikes.id=commentsWithDislikes.id ';

  return sql;
}

function selectCommentsWithLikes(postId) {
  let sql = '';
  sql += 'SELECT id, text, date, SUM(if(likedCommentId=0,0,1)) AS likes ';
  sql += 'FROM ( ';

  let sql1 = '';
  sql1 += 'SELECT id, text, date, COALESCE(commentId, 0) as likedCommentId ';
  sql1 += 'FROM ( ';

  let sql2 = '';
  sql2 += 'SELECT id, text, date, userId ';
  sql2 += `FROM comment `;
  sql2 += `WHERE postId = ${postId} `;

  sql1 += sql2;
  sql1 += ') ';
  sql1 += 'as myTable ';
  sql1 += 'left join commentLikedBy ';
  sql1 += 'on myTable.id=commentLikedBy.commentId ';

  sql += sql1;
  sql += ') ';
  sql += 'as myTable2 ';
  sql += 'GROUP BY id, text, date, likedCommentId ';

  return sql;
}

function selectCommentsWithDislikes(postId) {
  let sql = '';
  sql += 'SELECT id, text, date, SUM(if(dislikedCommentId=0,0,1)) AS dislikes ';
  sql += 'FROM ( ';

  let sql1 = '';
  sql1 += 'SELECT id, text, date, COALESCE(commentId, 0) as dislikedCommentId ';
  sql1 += 'FROM ( ';

  let sql2 = '';
  sql2 += 'SELECT id, text, date, userId ';
  sql2 += `FROM comment `;
  sql2 += `WHERE postId = ${postId} `;

  sql1 += sql2;
  sql1 += ') ';
  sql1 += 'as myTable ';
  sql1 += 'left join commentDislikedBy ';
  sql1 += 'on myTable.id=commentDislikedBy.commentId ';

  sql += sql1;
  sql += ') ';
  sql += 'as myTable2 ';
  sql += 'GROUP BY id, text, date, dislikedCommentId ';

  return sql;
}
