import HttpStatus from './httpStatus.js';
import Response from './response.js';

const ResponseManager = {
  INTERNAL_SERVER_ERROR: (res, ...args) => {
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
      .send(
        new Response(
          HttpStatus.INTERNAL_SERVER_ERROR.code,
          HttpStatus.INTERNAL_SERVER_ERROR.status,
          ...args
        )
      );
  },

  OK: (res, ...args) => {
    res
      .status(HttpStatus.OK.code)
      .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, ...args));
  },

  CREATED: (res, ...args) => {
    res
      .status(HttpStatus.CREATED.code)
      .send(new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status, ...args));
  },

  NOT_FOUND: (res, ...args) => {
    res
      .status(HttpStatus.NOT_FOUND.code)
      .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, ...args));
  },

  BAD_REQUEST: (res, ...args) => {
    res
      .status(HttpStatus.BAD_REQUEST.code)
      .send(new Response(HttpStatus.BAD_REQUEST.code, HttpStatus.BAD_REQUEST.status, ...args));
  }
};

export default ResponseManager;
