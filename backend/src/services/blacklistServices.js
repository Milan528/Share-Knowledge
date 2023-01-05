import QUERYS from '../sqlQuerys/blacklist.querys.js';
import database from '../tools/database.js';
import { getTodaysDate } from '../tools/dateFormater.js';
import response from '../tools/response/index.js';

export const addEmailToBlacklist = async (req) => {
  const { email } = req.body;
  const { results, error } = await database.query(QUERYS.CREATE_ENTRY, [
    email,
    getTodaysDate(),
    '192.168.1.1'
  ]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.OK('Entry added');
  }
};
