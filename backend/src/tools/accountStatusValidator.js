import QUERYS from '../sqlQuerys/user.querys.js';
import database from './database.js';
import response from './response/index.js';

export const accountBanned = async (req, res, next) => {
  const { email } = req.body;
  const { results, error } = await database.query(QUERYS.SELECT_USER_BY_EMAIL, email);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results || results.length === 0) {
    return response.NOT_FOUND(`User not found`, results);
  } else {
    const user = results[0];
    if (user.banned) {
      const myResponse = response.INTERNAL_SERVER_ERROR(`User profile is banned`);
      return res.status(myResponse.statusCode).send(myResponse);
    } else {
      next();
    }
  }
};
