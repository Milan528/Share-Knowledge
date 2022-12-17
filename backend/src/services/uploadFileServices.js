import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import FILE_QUERYS from '../sqlQuerys/files.querys.js';
import database from '../tools/database.js';
import response from '../tools/response/index.js';

const createFilePath = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  return path.join(__dirname, '../..', 'files', filename);
};

export const uploadPostFile = async (req) => {
  const postId = req.body.postId;
  return await uploadFile(req, FILE_QUERYS.CREATE_FILE_FOR_POST, postId);
};

export const uploadCommentFile = async (req) => {
  const commentId = req.body.commentId;
  return await uploadFile(req, FILE_QUERYS.CREATE_FILE_FOR_COMMENT, commentId);
};

async function insertFileInfoIntoTable(query, filepath, ext, postId) {
  const { results, error } = await database.query(query, [filepath, ext, postId]);
  if (error) {
    return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`);
  } else if (!results) {
    return response.INTERNAL_SERVER_ERROR(`Error occurred`);
  }
}

async function uploadFile(req, table, fileId) {
  const files = req.files;

  Object.keys(files).forEach((key) => {
    const file = files[key];
    const uniqueFileName = uuidv4() + '-' + file.name;
    const filepath = createFilePath(uniqueFileName);
    const ext = '.' + file.mimetype.split('/')[1];

    files[key].mv(filepath, async (err) => {
      if (err) {
        return response.INTERNAL_SERVER_ERROR(`An unexpected error occured`, err);
      } else {
        return await insertFileInfoIntoTable(table, uniqueFileName, ext, fileId);
      }
    });
  });

  return response.OK('Files uploaded');
}

//******************SERVICE FOR DOWNLOADING FILE DIRECTLY FROM SERVER*********************/
// export const getFile = async (req, res) => {
//   const fileName = req.params.fileName;
//   const filePath = './' + process.env.SERVER_STORAGE + fileName; //"./files/1630585050554.docx"
//   // let file = fs.createReadStream(filePath);
//   // file.pipe(res);
//   res.download(filePath); //this is the same as previous two lines
// };
