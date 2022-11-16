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

export const createTag = async (req, res) => {
  const tag = req.body;
  const { results, error } = await database.query(QUERYS.CREATE_TAG, Object.values(tag));

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    const createtag = {
      id: results.insertId,
      ...tag
    };

    ResponseManager.CREATED(res, `Tag created`, createtag);
  }
};

export const deleteTag = async (req, res) => {
  const { results, error } = await database.query(QUERYS.DELETE_TAG, [req.params.id]);
  console.log(results);
  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  }
  if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    ResponseManager.OK(res, `Tag deleted`, req.params.id);
  }
};
