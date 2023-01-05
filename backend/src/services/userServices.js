import QUERYS from '../sqlQuerys/user.querys.js';
import database from '../tools/database.js';
import response from '../tools/response/index.js';
import { addEmailToBlacklist } from './blacklistServices.js';
import { deleteCommentsForUserID } from './commentServices.js';
import { deletePostsForUserID } from './postServices.js';

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

export const banUserAccount = async (req) => {
  const { banUserId } = req.body;

  const { results, error } = await database.query(QUERYS.UPDATE_BANNED, [1, banUserId]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (results.affectedRows === 0) {
    return response.NOT_FOUND(`User not found`, results);
  } else {
    return response.OK(`User banned`, results);
  }
};

export const unbanUserAccount = async (req) => {
  const { unbanUserId } = req.body;

  const { results, error } = await database.query(QUERYS.UPDATE_BANNED, [0, unbanUserId]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (results.affectedRows === 0) {
    return response.NOT_FOUND(`User not found`, results);
  } else {
    return response.OK(`User banned`, results);
  }
};

export const blacklistUserAccount = async (req) => {
  const { blacklistUserId } = req.body;

  await deleteCommentsForUserID(blacklistUserId);
  await deletePostsForUserID(blacklistUserId);

  const { results, error } = await database.query(QUERYS.DELETE_USER, [blacklistUserId]);
  console.log(results);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results || results.affectedRows === 0) {
    return response.NOT_FOUND(`User not found`);
  } else {
    return await addEmailToBlacklist(req);
  }
};
