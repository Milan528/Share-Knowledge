import ResponseManager from '../tools/ResponseManager/index.js';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import FILE_QUERYS from '../sqlQuerys/files.querys.js';
import database from '../tools/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const uploadPostFile = async (req, res) => {
  const files = req.files;
  const postId = req.body.postId;
  Object.keys(files).forEach((key) => {
    const filepath = path.join(__dirname, '../..', 'files', uuidv4() + ' ' + files[key].name);
    files[key].mv(filepath, async (err) => {
      if (err) {
        return ResponseManager.INTERNAL_SERVER_ERROR(res, err);
      } else {
        //WRITE FILEPATH TO DATABASE
        await insertDataIntoFileTable(filepath, files[key].mimetype.split('/')[1], postId);
      }
    });
  });
  // Object.keys(files).toString()
  return ResponseManager.OK(res, 'Files uploaded');
};
async function insertDataIntoFileTable(filepath, ext, postId) {
  const { results, error } = await database.query(FILE_QUERYS.CREATE_FILE, [filepath, ext, postId]);
  if (error) {
    ResponseManager.INTERNAL_SERVER_ERROR(res, `An unexpected error occured`);
  } else if (!results) ResponseManager.INTERNAL_SERVER_ERROR(res, `Error occurred`);
  //   } else {
  //     const postID = results.insertId;
  // }
}
