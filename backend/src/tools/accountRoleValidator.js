import QUERYS from '../sqlQuerys/user.querys.js';
import database from './database.js';
import { userRole } from './enums.js';
import response from './response/index.js';

export const accountIsAdmin = async (req, res, next) => {
  return await accountRoleValidator(req, res, next, userRole.admin);
};

const accountRoleValidator = async (req, res, next, role) => {
  const { userID } = req.body;
  const { results, error } = await database.query(QUERYS.SELECT_USER_BY_ID, [userID]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results || results.length === 0) {
    return response.NOT_FOUND(`User not found`, results);
  } else {
    const user = results[0];
    if (user.role === role) {
      next();
    } else {
      return response.BAD_REQUEST(`Invalid request`);
    }
  }
};
