const QUERY = {
  SELECT_USER_BY_EMAIL: 'SELECT * FROM user WHERE email = ?',
  CREATE_USER: 'INSERT INTO user(username, email, password, role) VALUES (?, ?, ?, ?)',
  SELECT_USERS_AND_LIKES
};

export default QUERY;

function SELECT_USERS_AND_LIKES() {
  let sql = '';
  sql += 'SELECT username, SUM(if(likedPostId=0,0,1)) AS likes ';

  sql += 'FROM ( ';
  sql += '       SELECT username, COALESCE(postId, 0) as likedPostId ';
  sql += '       FROM user ';
  sql += '       left join postLikedBy ';
  sql += '       on user.id=postLikedBy.userId ';
  sql += ') as myTable3 ';
  sql += 'GROUP BY username, likedPostId ';
  sql += 'ORDER BY likes DESC ';

  return sql;
}
