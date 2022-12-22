import * as postServices from './postServices.js';
import * as tagsServices from './tagsServices.js';
import * as authServices from './authServices.js';
import * as uploadFileServices from './uploadFileServices.js';
import * as commentServices from './commentServices.js';
import * as postLikedByServices from './postLikedByServices.js';
import * as postDislikedByServices from './postDislikedByServices.js';
import * as commentLikedByServices from './commentLikedByServices.js';
import * as commentDislikedByServices from './commentDislikedByServices.js';
import * as userServices from './userServices.js';

const services = {
  postServices,
  tagsServices,
  authServices,
  uploadFileServices,
  commentServices,
  postLikedByServices,
  postDislikedByServices,
  commentLikedByServices,
  commentDislikedByServices,
  userServices
};

export default services;
