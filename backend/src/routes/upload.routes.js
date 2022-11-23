import express from 'express';
import { uploadPostFile } from '../controllers/upload.controller.js';
import filesPayloadExists from '../tools/fileUploader/filesPayloadExists.js';
import fileExtLimiter from '../tools/fileUploader/fileExtLimiter.js';
import fileSizeLimiter from '../tools/fileUploader/fileSizeLimiter.js';
import fileUpload from 'express-fileupload';
import allowed_ext from '../tools/fileUploader/allowedFileExtensions.js';

const uploadRoutes = express.Router();

function recursion(obj, numOfKeys) {
  if (numOfKeys < 0) return [];
  var key = Object.keys(obj)[numOfKeys]; //fetched the key at second index
  return obj[key].concat(recursion(obj, numOfKeys - 1));
}

uploadRoutes
  .route('/post')
  .post(
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter(recursion(allowed_ext, Object.keys(allowed_ext).length - 1)),
    fileSizeLimiter,
    uploadPostFile
  );

export default uploadRoutes;
