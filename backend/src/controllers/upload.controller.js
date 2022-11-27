import services from '../services/index.js';
const { uploadFileServices } = services;

export const uploadPostFile = async (req, res) => {
  return uploadFileServices.uploadPostFile(req, res);
};

// export const getFile = async (req, res) => {
//   const fileName = req.params.fileName;
//   const filePath = './' + process.env.SERVER_STORAGE + fileName; //"./files/1630585050554.docx"
//   // let file = fs.createReadStream(filePath);
//   // file.pipe(res);
//   res.download(filePath); //this is the same as previous two lines
// };
