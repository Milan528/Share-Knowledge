import QUERYS from '../sqlQuerys/tags.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';

export const getTags = async (req, res) => {
  const { results, error } = await database.query(QUERYS.SELECT_TAGS);
  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.OK(res, `No tags found`);
  } else {
    ResponseManager.OK(res, `Tags retrieved`, results);
  }
};
