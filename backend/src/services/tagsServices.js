import QUERYS from '../sqlQuerys/tags.querys.js';
import database from '../tools/database.js';
import response from '../tools/response/index.js';

export const getTags = async (req) => {
  const { results, error } = await database.query(QUERYS.SELECT_TAGS);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.OK(`No tags found`);
  } else {
    return response.OK(`Tags retrieved`, results);
  }
};

export const createTag = async (req) => {
  const tag = req.body;
  const { results, error } = await database.query(QUERYS.CREATE_TAG, Object.values(tag));

  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    const createtag = {
      id: results.insertId,
      ...tag
    };

    return response.CREATED(`Tag created`, createtag);
  }
};

export const deleteTag = async (req) => {
  const { results, error } = await database.query(QUERYS.DELETE_TAG, [req.params.id]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  }
  if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  } else {
    return response.OK(`Tag deleted`, req.params.id);
  }
};
