import QUERYS from '../sqlQuerys/user.querys.js';
import database from '../tools/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import response from '../tools/response/index.js';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const loginUser = async (req) => {
  const { email, password } = req.body;

  if (validateEmail(email) === null) {
    return response.BAD_REQUEST(`Not a valid email address`);
  }

  const { results, error } = await database.query(QUERYS.SELECT_USER_BY_EMAIL, email);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results || results.length === 0) {
    return response.NOT_FOUND(`User not found`, results);
  } else {
    const user = results[0];

    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      return response.OK(`User retrieved`, {
        token: accessToken,
        role: user.role,
        username: user.username
      });
    } else {
      return response.NOT_FOUND(`Wrong email or password`);
    }
  }
};

export const registerUser = async (req) => {
  const { email, password } = req.body;

  if (validateEmail(email) === null) {
    return response.BAD_REQUEST(`Not a valid email address`);
  }

  const { results, error } = await database.query(QUERYS.SELECT_USER_BY_EMAIL, email);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results || results.length === 0) {
    return await createUser(req, email, password);
  } else {
    return response.OK(`Email already in use`, results);
  }
};

async function createUser(req, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const username = uuidv4();
  const { results, error } = await database.query(QUERYS.CREATE_USER, [
    username,
    email,
    hashedPassword,
    'visitor'
  ]);

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }

  return await loginUser(req);
}
