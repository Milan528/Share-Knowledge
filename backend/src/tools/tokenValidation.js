import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import response from './response/index.js';

dotenv.config();

const tokenValidation = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token === 'undefined' || token === 'null') {
    return response.BAD_REQUEST(`Token is undefined`);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return response.BAD_REQUEST(err.message);
    }

    req.body.userID = user.id;
    next();
  });
};

export default tokenValidation;
