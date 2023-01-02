const QUERY = {
  SELECT_USER_BY_EMAIL: 'SELECT * FROM user WHERE email = ?',
  SELECT_USER_BY_USERNAME: 'SELECT * FROM user WHERE username = ?',
  CREATE_USER: 'INSERT INTO user(username, email, password, role) VALUES (?, ?, ?, ?)',
  SELECT_USERS_AND_ROLES: 'select username, role from user',
  SELECT_TOTAL_LIKES_FOR_USER,
  UPDATE_ROLE: 'UPDATE user SET role = ? WHERE username = ?',
  UPDATE_PASSWORD,
  UPDATE_USERNAME: 'UPDATE user SET username = ? WHERE email = ?'
};

export default QUERY;

function UPDATE_PASSWORD(email, password) {
  const sql = `UPDATE user SET password = '${password}' WHERE email = '${email}' `;
  return sql;
}

function SELECT_TOTAL_LIKES_FOR_USER() {
  let sql = '';

  sql +=
    'select userPostLikesTable.username, userPostLikesTable.role, SUM(userPostLikesTable.likes+userCommentsLikesTable.likes) as likes ';
  sql += 'from ( ';
  sql += SELECT_LIKES_FOR_USER_POSTS();
  sql += ') as userPostLikesTable ';
  sql += 'join ( ';
  sql += SELECT_LIKES_FOR_USER_COMMENTS();
  sql += ') userCommentsLikesTable ';
  sql += 'on userPostLikesTable.username=userCommentsLikesTable.username ';
  sql += 'group by username ';

  return sql;
}

function SELECT_LIKES_FOR_USER_POSTS() {
  let sql = '';
  sql += 'select username, role, SUM(if(likedByUserId=0,0,1)) AS likes ';
  sql += 'from ( ';
  sql += '       SELECT username, role, COALESCE(userId ,0) as likedByUserId ';
  sql += '       from ( ';
  sql += '              SELECT username, role, post.id as postId ';
  sql += '              from user';
  sql += '              left join post  ';
  sql += '              on post.userId=user.id  ';
  sql += '       ) as myTable ';
  sql += '       left join postLikedBy  ';
  sql += '       on myTable.postId=postLikedBy.postId ';
  sql += ') as myTable2 ';
  sql += 'group by username ';
  sql += 'order by likes DESC';

  return sql;

  //*****************SOLUTION 2*****************/
  // select username, COALESCE(postLikes, 0) as likes
  // from user
  // left join
  // 		(select postedBy, SUM(postLikes) AS postLikes
  // 		from (
  // 				select id,postedBy, SUM(if(likedByUserId=0,0,1)) AS postLikes
  // 				from (
  // 						select id, post.userId as postedBy,  COALESCE(postLikedBy.userId, 0) as likedByUserId
  // 						from post
  // 						left join postLikedBy
  // 						on post.id=postLikedBy.postId
  // 					) as res1
  // 					group by id
  // 		) as res2
  // 		group by postedBy
  // 	) as res3
  //     on id=res3.postedBy
}

function SELECT_LIKES_FOR_USER_COMMENTS() {
  let sql = '';
  sql += 'select username, role, SUM(if(likedByUserId=0,0,1)) AS likes ';
  sql += 'from ( ';
  sql += '       SELECT username, role, COALESCE(userId ,0) as likedByUserId ';
  sql += '       from ( ';
  sql += '              SELECT username, role, comment.id as commentId ';
  sql += '              from user';
  sql += '              left join comment  ';
  sql += '              on comment.userId=user.id  ';
  sql += '       ) as myTable ';
  sql += '       left join commentLikedBy  ';
  sql += '       on myTable.commentId=commentLikedBy.commentId ';
  sql += ') as myTable2 ';
  sql += 'group by username ';
  sql += 'order by likes DESC';

  return sql;
}
