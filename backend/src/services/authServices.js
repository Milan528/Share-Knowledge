import QUERYS from '../sqlQuerys/user.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const loginUser = async (req, res) => {
  const { params } = req.body;
  const { email, password } = params;

  if (validateEmail(email) === null) {
    return ResponseManager.BAD_REQUEST(res, `Not a valid email address`);
  }

  const { results, error } = await database.query(QUERYS.SELECT_USER_BY_EMAIL, email);

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.NOT_FOUND(res, `User not found`, results);
  } else {
    const user = results[0];
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      ResponseManager.OK(res, `User retrieved`, {
        token: accessToken,
        role: user.role
      });
    }
  }
};

export const registerUser = async (req, res) => {
  const { params } = req.body;
  const { email, password } = params;

  if (validateEmail(email) === null) {
    return ResponseManager.BAD_REQUEST(res, `Not a valid email address`);
  }

  const { results, error } = await database.query(QUERYS.SELECT_USER_BY_EMAIL, email);
  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results || results.length === 0) {
    createUser(req, res, email, password);
  } else {
    ResponseManager.OK(res, `Email already in use`, results);
  }

  async function createUser(req, res, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const { results, error } = await database.query(QUERYS.CREATE_USER, [
      email, //initially, username is same as email
      email,
      hashedPassword,
      'visitor'
    ]);

    if (error) {
      return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
    }

    loginUser(req, res);
  }
};

export const getSerchSentenceToken = async (req, res) => {
  const { results, error } = await database.query(QUERYS.SELECT_USER_BY_EMAIL, email);
  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results || results.length === 0) {
    createUser(req, res, email, password);
  } else {
    ResponseManager.OK(res, `Email already in use`, results);
  }

  async function createUser(req, res, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const { results, error } = await database.query(QUERYS.CREATE_USER, [
      email, //initially, username is same as email
      email,
      hashedPassword,
      'visitor'
    ]);

    if (error) {
      return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
    }

    loginUser(req, res);
  }
};
