import ResponseManager from '../ResponseManager/index.js';

const filesPayloadExists = (req, res, next) => {
  if (!req.files) return ResponseManager.BAD_REQUEST(res, 'Missing files');

  next();
};

export default filesPayloadExists;
