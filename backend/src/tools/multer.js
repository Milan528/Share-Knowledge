import multer from 'multer';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: process.env.SERVER_STORAGE, //putanja je relativna u odnosu na glavni inex.js
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
    }
  })
});

export default upload;
