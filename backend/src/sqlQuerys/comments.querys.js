const QUERY = {
  CREATE_COMMENT: 'INSERT INTO comment(text, date, postId, userId) VALUES (?, ?, ?,?)',
  SELECT_COMMENTS_FOR_POST: selectCommentsForPost
};

export default QUERY;

function selectCommentsForPost(postId) {
  let sql = '';
  sql += 'SELECT id, text, date, SUM(if(commentId=0,0,1)) AS likes ';
  sql += 'FROM ( ';

  let sql1 = '';
  sql1 += 'SELECT id, text, date, COALESCE(commentId, 0) as commentId ';
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
  sql += 'GROUP BY id, text, date, commentId; ';

  return sql;
}