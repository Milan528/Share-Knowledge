const QUERY = {
  SELECT_REPORTED_POST: 'SELECT * FROM postReportedBy WHERE reportedById = ? AND postId = ?',
  SELECT_REPORTED_POSTS: 'SELECT * FROM postReportedBy ',
  CREATE_REPORT_POST:
    'INSERT INTO postReportedBy (reportedById,postId,postedById) VALUES (?, ?, ?)',
  DELETE_REPORT: 'DELETE FROM postReportedBy WHERE reportedById = ? AND postId = ?'
};

export default QUERY;
