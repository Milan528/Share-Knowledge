import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import ResponseManager from './ResponseManager/index.js';

dotenv.config();

const tokenValidation = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == 'undefined') {
    return ResponseManager.BAD_REQUEST(res, `Token is undefined`);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return ResponseManager.BAD_REQUEST(res, err.message);
    }

    req.body.userID = user.id;
    next();
  });
};

export default tokenValidation;
