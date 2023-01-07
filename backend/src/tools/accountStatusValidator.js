import QUERYS from '../sqlQuerys/user.querys.js';
import database from './database.js';
import response from './response/index.js';

export const accountBanned = async (req, res, next) => {
  const { email } = req.body;
  const { results, error } = await database.query(QUERYS.SELECT_USER_BY_EMAIL, email);
  if (error) {
    const myResponse = response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
    return res.status(myResponse.statusCode).send(myResponse);
  } else if (!results || results.length === 0) {
    const myResponse = response.NOT_FOUND(`User not found`, results);
    return res.status(myResponse.statusCode).send(myResponse);
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
