export const httpStatusChecker = (response) => {
  if (response.statusCode > 299) throw new Error(response.message);
};

export default httpStatusChecker;
