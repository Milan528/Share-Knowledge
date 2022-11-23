import path from 'path';
import ResponseManager from '../ResponseManager/index.js';

const fileExtLimiter = (allowedExtArray) => {
  return (req, res, next) => {
    const files = req.files;
    console.log(files);
    const fileExtensions = [];
    Object.keys(files).forEach((key) => {
      console.log(files[key].name);
      fileExtensions.push(path.extname(files[key].name));
    });

    // Are the file extension allowed?
    const allowed = fileExtensions.every((ext) => allowedExtArray.includes(ext));

    if (!allowed) {
      const message = `Upload failed. Only ${allowedExtArray.toString()} files allowed.`.replaceAll(
        ',',
        ', '
      );

      return ResponseManager.BAD_REQUEST(res, message);
    }

    next();
  };
};

export default fileExtLimiter;
