const QUERY = {
  SELECT_REPORTED_COMMENT:
    'SELECT * FROM commentReportedBy WHERE reportedById = ? AND commentId = ?',
  SELECT_REPORTED_COMMENTS: 'SELECT * FROM commentReportedBy ',
  CREATE_REPORT_COMMENT:
    'INSERT INTO commentReportedBy (reportedById, commentId, postedById) VALUES (?, ?, ?)',
  DELETE_REPORT: 'DELETE FROM commentReportedBy WHERE reportedById = ? AND commentId = ?'
};

export default QUERY;
