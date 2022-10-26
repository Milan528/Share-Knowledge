import QUERYS from '../sqlQuerys/files.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';
import fs from 'fs';

export const getFile = async (req, res) => {
  let filePath = req.query.filePath;
  let splitResult = filePath.split('/');
  let fileName = splitResult[splitResult.length - 1];
  filePath = './' + process.env.SERVER_STORAGE + fileName; //"./files/1630585050554.docx"

  let file = fs.createReadStream(filePath);
  file.pipe(res);

  // res.download(filePath) //this is the same as previous two lines
};

export const createFile = async (req, res) => {
  let ext = req.file.filename.split('.');
  ext = ext[ext.length - 1];

  const { results, error } = await database.query(
    QUERYS.CREATE_FILE,
    req.file.filename,
    ext,
    req.body.postId
  );

  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  } else {
    const post = {
      id: results.insertId,
      ...req.body
    };

    ResponseManager.CREATED(res, `File created`, post);
  }
};
