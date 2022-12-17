import response from '../response/index.js';

const filesPayloadExists = (req, res, next) => {
  if (!req.files) return response.BAD_REQUEST('Missing files');
  next();
};

export default filesPayloadExists;
