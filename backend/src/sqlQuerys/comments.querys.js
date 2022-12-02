const QUERY = {
  CREATE_COMMENT: 'INSERT INTO comment(text, date, postId, userId) VALUES (?, ?, ?,?)',
  // SELECT_COMMENTS_FOR_POST:
  // 'SELECT id, text, date, userId FROM post_comment JOIN comment ON post_comment.commentId=comment.id WHERE postId = ?'
  SELECT_COMMENTS_FOR_POST: selectCommentsForPost
};

export default QUERY;

function selectCommentsForPost(postId) {
  let sql = '';
  sql += 'SELECT id, text, date, COUNT(*) AS likes ';
  sql += 'FROM ( ';

  let sql1 = '';
  sql1 += 'SELECT id, text, date, userId  ';
  sql1 += 'FROM comment ';
  sql1 += `WHERE postId = ${postId} `;

  sql += sql1;
  sql += ') ';
  sql += 'as myTable ';
  sql += 'join commentLikedBy ';
  sql += 'on myTable.id=commentLikedBy.commentId ';
  sql += 'GROUP BY commentLikedBy.commentId; ';

  console.log(sql);
  return sql;
}
