import path from 'path';
import ResponseManager from '../ResponseManager/index.js';
import allowed_ext from './allowedFileExtensions.js';

const IMAGE_MB = 5; // 5 MB
const DOC_MB = 5; // 5 MB
const IMAGE_SIZE_LIMIT = IMAGE_MB * 1024 * 1024;
const DOC_SIZE_LIMIT = DOC_MB * 1024 * 1024;

const fileSizeLimiter = (req, res, next) => {
  const files = req.files;
  const images = [];
  const docs = [];

  Object.keys(files).forEach((key) => {
    if (allowed_ext.images.includes(path.extname(files[key].name))) {
      images.push(files[key]);
    } else if (allowed_ext.docs.includes(path.extname(files[key].name))) {
      docs.push(files[key]);
    }
  });

  if (images.length > 10)
    return ResponseManager.BAD_REQUEST(res, "Images number can't be greater than 10");

  if (docs.length > 10)
    return ResponseManager.BAD_REQUEST(res, "Documents number can't be greater than 10");

  let filesOverLimit = [];
  filesOverLimit = filesOverLimit.concat(checkFilesSizeLimit(images, IMAGE_SIZE_LIMIT));
  filesOverLimit = filesOverLimit.concat(checkFilesSizeLimit(docs, DOC_SIZE_LIMIT));

  if (filesOverLimit.length > 0) {
    const properVerb = filesOverLimit.length > 1 ? 'are' : 'is';

    const sentence =
      `Upload failed. ${filesOverLimit.toString()} ${properVerb} over the file size limit. Size lifit for Images is ${IMAGE_MB} and
      ${DOC_MB} for documents. `.replaceAll(',', ', ');

    const message =
      filesOverLimit.length < 3
        ? sentence.replace(',', ' and')
        : sentence.replace(/,(?=[^,]*$)/, ' and');

    return ResponseManager.BAD_REQUEST(res, message);
  }

  next();
};

function checkFilesSizeLimit(filesToCheck, limit) {
  const largeFiles = [];
  filesToCheck.forEach((file) => {
    if (file.size > limit) {
      largeFiles.push(file.name);
    }
  });
  return largeFiles;
}

export default fileSizeLimiter;
