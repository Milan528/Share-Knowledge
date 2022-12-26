const QUERY = {
  CREATE_COMMENT: 'INSERT INTO comment(text, date, postId, userId) VALUES (?, ?, ?,?)',
  DELETE_COMMENT: 'DELETE FROM comment WHERE id = ?',
  SELECT_COMMENT_BY_ID,
  SELECT_COMMENTS_FOR_POST
};

export default QUERY;

/*********************************ONE*********************************/

function SELECT_COMMENT_BY_ID(commentId) {
  let sql = '';

  sql += selectCommentsWithLikesAndDislikes(
    selectCommentsWithLikes(selectCommentByCommentId(commentId)),
    selectCommentsWithDislikes(selectCommentByCommentId(commentId))
  );

  return sql;
}

/* - - - - - - - - - - - - - - -HELPERS- - - - - - - - - - - - - - - */

function selectCommentByCommentId(commentId) {
  let sql = '';

  sql += 'SELECT comment.id, text, date, username ';
  sql += `FROM comment `;
  sql += `join user `;
  sql += `on user.id= comment.userId `;
  sql += `WHERE comment.id = ${commentId} `;

  return sql;
}

/*********************************MANY*********************************/

function SELECT_COMMENTS_FOR_POST(postId) {
  let sql = '';
  sql += selectCommentsWithLikesAndDislikes(
    selectCommentsWithLikes(selectCommentsByPostId(postId)),
    selectCommentsWithDislikes(selectCommentsByPostId(postId))
  );

  return sql;
}

/* - - - - - - - - - - - - - - -HELPERS- - - - - - - - - - - - - - - */

function selectCommentsWithLikesAndDislikes(tableOfCommentsWithLikes, tableOfCommentsWithDislikes) {
  let sql = '';
  sql +=
    'SELECT commentsWithLikes.id, commentsWithLikes.text, commentsWithLikes.date, commentsWithLikes.likes, commentsWithLikes.username as postedBy, commentsWithDislikes.dislikes ';
  sql += 'FROM ( ';
  sql += tableOfCommentsWithLikes;
  sql += ') as commentsWithLikes ';
  sql += 'join ( ';
  sql += tableOfCommentsWithDislikes;
  sql += ') commentsWithDislikes ';
  sql += 'on commentsWithLikes.id=commentsWithDislikes.id ';

  return sql;
}

function selectCommentsWithLikes(tableOfCommentsWithUsername) {
  let sql = '';
  sql += 'SELECT id, text, date, username, SUM(if(likedCommentId=0,0,1)) AS likes ';
  sql += 'FROM ( ';

  let sql1 = '';
  sql1 += 'SELECT id, text, date, username, COALESCE(commentId, 0) as likedCommentId ';
  sql1 += 'FROM ( ';

  sql1 += tableOfCommentsWithUsername;

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

function selectCommentsByPostId(postId) {
  let sql = '';

  sql += 'SELECT comment.id, text, date, username ';
  sql += `FROM comment `;
  sql += `join user `;
  sql += `on user.id= comment.userId `;
  sql += `WHERE postId = ${postId} `;

  return sql;
}

function selectCommentsWithDislikes(tableOfCommentsWithUsername) {
  let sql = '';
  sql += 'SELECT id, text, date, username, SUM(if(dislikedCommentId=0,0,1)) AS dislikes ';
  sql += 'FROM ( ';

  let sql1 = '';
  sql1 += 'SELECT id, text, date, username, COALESCE(commentId, 0) as dislikedCommentId ';
  sql1 += 'FROM ( ';

  sql1 += tableOfCommentsWithUsername;

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
