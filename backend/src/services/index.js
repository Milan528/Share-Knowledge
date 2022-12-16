import * as postServices from './postServices.js';
import * as tagsServices from './tagsServices.js';
import * as authServices from './authServices.js';
import * as uploadFileServices from './uploadFileServices.js';
import * as commentServices from './commentServices.js';
import * as postLikedByServices from './postLikedByServices.js';
import * as postDislikedByServices from './postDislikedByServices.js';

const services = {
  postServices,
  tagsServices,
  authServices,
  uploadFileServices,
  commentServices,
  postLikedByServices,
  postDislikedByServices
};

export default services;
