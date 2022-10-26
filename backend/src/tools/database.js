import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: process.env.DB_CONNECTION_LIMIT
});

const database = {
  query: (...args) => {
    return new Promise((resolve, reject) => {
      pool.query(...args, (error, results) => {
        if (error) console.log(error);

        resolve({ results, error });
      });
    });
  }
};

export default database;
