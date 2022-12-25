import QUERYS from '../sqlQuerys/user.querys.js';
import database from '../tools/database.js';
import response from '../tools/response/index.js';

export const getUsersAndLikes = async (req) => {
  const { results, error } = await database.query(QUERYS.SELECT_TOTAL_LIKES_FOR_USER());

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else {
    return response.OK(`Users retrieved`, results);
  }
};

export const getUsernamesWithRoles = async (req) => {
  const { results, error } = await database.query(QUERYS.SELECT_USERS_AND_ROLES);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.NOT_FOUND(`No users found`);
  } else {
    return response.OK(`Users retrieved`, results);
  }
};

export const updateUserRole = async (req) => {
  const { username, role } = req.body;
  const { results, error } = await database.query(QUERYS.UPDATE_ROLE, [role, username]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else {
    return response.OK(`User role updated`, results);
  }
};

export const getUserByUsername = async (username) => {
  const { results, error } = await database.query(QUERYS.SELECT_USER_BY_USERNAME, [username]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results[0]) {
    return response.NOT_FOUND(`No user found`);
  } else {
    return response.OK(`User found`, results[0]);
  }
};
