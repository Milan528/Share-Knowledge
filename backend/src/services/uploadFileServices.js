import ResponseManager from '../tools/ResponseManager/index.js';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import FILE_QUERYS from '../sqlQuerys/files.querys.js';
import database from '../tools/database.js';

const createFilePath = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  return path.join(__dirname, '../..', 'files', filename);
};

async function insertFileInfoIntoTable(res, query, filepath, ext, postId) {
  const { results, error } = await database.query(query, [filepath, ext, postId]);
  if (error) {
    return ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) {
    return ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  }
}

const uploadFile = async (req, res, table, fileId) => {
  const files = req.files;

  Object.keys(files).forEach((key) => {
    const file = files[key];
    const uniqueFileName = uuidv4() + '-' + file.name;
    const filepath = createFilePath(uniqueFileName);
    const ext = '.' + file.mimetype.split('/')[1];

    files[key].mv(filepath, async (err) => {
      if (err) {
        return ResponseManager.INTERNAL_SERVER_ERROR(res, err);
      } else {
        await insertFileInfoIntoTable(res, table, uniqueFileName, ext, fileId);
      }
    });
  });

  return ResponseManager.OK(res, 'Files uploaded');
};

export const uploadPostFile = async (req, res) => {
  const postId = req.body.postId;
  uploadFile(req, res, FILE_QUERYS.CREATE_FILE_FOR_POST, postId);
};

export const uploadCommentFile = async (req, res) => {
  const commentId = req.body.commentId;
  uploadFile(req, res, FILE_QUERYS.CREATE_FILE_FOR_COMMENT, commentId);
};
