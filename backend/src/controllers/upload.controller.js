import QUERYS from '../sqlQuerys/files.querys.js';
import database from '../tools/database.js';
import ResponseManager from '../tools/ResponseManager/index.js';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const uploadPostFile = async (req, res) => {
  const files = req.files;
  const postId = req.body.postId;
  Object.keys(files).forEach((key) => {
    const filepath = path.join(__dirname, '../..', 'files', uuidv4() + ' ' + files[key].name);
    files[key].mv(filepath, (err) => {
      if (err) {
        return ResponseManager.INTERNAL_SERVER_ERROR(res, err);
      } else {
        console.log('file uploaded');
        //WRITE FILEPATH TO DATABASE
      }
    });
  });
  return ResponseManager.OK(res, Object.keys(files).toString());
};

// export const getFile = async (req, res) => {
//   const fileName = req.params.fileName;
//   const filePath = './' + process.env.SERVER_STORAGE + fileName; //"./files/1630585050554.docx"
//   // let file = fs.createReadStream(filePath);
//   // file.pipe(res);
//   res.download(filePath); //this is the same as previous two lines
// };
