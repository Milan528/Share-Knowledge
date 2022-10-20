import QUERYS from '../sqlQuerys/posts.querys.js';
import database from '../database/database.js';
import HttpStatus from '../tools/httpStatus.js';
import Response from '../tools/response.js';

export const getPosts = (req, res) => {
  database.query(QUERYS.SELECT_POSTS, (error, results) => {
    if (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
        .send(
          new Response(
            HttpStatus.INTERNAL_SERVER_ERROR.code,
            HttpStatus.INTERNAL_SERVER_ERROR.status,
            `An unexpected error occured`
          )
        );
    }
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `No posts found`));
    } else {
      res.status(HttpStatus.OK.code).send(
        new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Posts retrieved`, {
          posts: results
        })
      );
    }
  });
};

export const getPost = (req, res) => {
  database.query(QUERYS.SELECT_POST, [req.params.id], (error, results) => {
    if (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
        .send(
          new Response(
            HttpStatus.INTERNAL_SERVER_ERROR.code,
            HttpStatus.INTERNAL_SERVER_ERROR.status,
            `An unexpected error occured`
          )
        );
    }
    if (!results[0]) {
      res
        .status(HttpStatus.OK.code)
        .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `No post found`));
    } else {
      console.log(results);
      res.status(HttpStatus.OK.code).send(
        new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Post retrieved`, {
          post: results[0]
        })
      );
    }
  });
};

export const createPost = (req, res) => {
  database.query(QUERYS.CREATE_POST, Object.values(req.body), (error, results) => {
    if (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
        .send(
          new Response(
            HttpStatus.INTERNAL_SERVER_ERROR.code,
            HttpStatus.INTERNAL_SERVER_ERROR.status,
            `An unexpected error occured`
          )
        );
    }
    if (!results) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
        .send(
          new Response(
            HttpStatus.INTERNAL_SERVER_ERROR.code,
            HttpStatus.INTERNAL_SERVER_ERROR.status,
            `Error occurred`
          )
        );
    } else {
      const post = {
        id: results.insertId,
        ...req.body
      };
      res.status(HttpStatus.CREATED.code).send(
        new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status, `Post created`, {
          post: post
        })
      );
    }
  });
};

export const updatePost = (req, res) => {
  database.query(QUERYS.SELECT_POST, [req.params.id], (error, results) => {
    if (!results[0]) {
      res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
          new Response(
            HttpStatus.NOT_FOUND.code,
            HttpStatus.NOT_FOUND.status,
            `Post by id ${req.params.id} was not found`
          )
        );
    } else {
      database.query(
        QUERYS.UPDATE_POST,
        [...Object.values(req.body), req.params.id],
        (error, results) => {
          if (!error) {
            res.status(HttpStatus.OK.code).send(
              new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Post updated`, {
                id: req.params.id,
                ...req.body
              })
            );
          } else {
            console.log(error);
            res
              .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
              .send(
                new Response(
                  HttpStatus.INTERNAL_SERVER_ERROR.code,
                  HttpStatus.INTERNAL_SERVER_ERROR.status,
                  `Error occurred`
                )
              );
          }
        }
      );
    }
  });
};

export const deletePost = (req, res) => {
  database.query(QUERYS.DELETE_POST, [req.params.id], (error, results) => {
    if (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
        .send(
          new Response(
            HttpStatus.INTERNAL_SERVER_ERROR.code,
            HttpStatus.INTERNAL_SERVER_ERROR.status,
            `An unexpected error occured`
          )
        );
    }
    if (!results) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
        .send(
          new Response(
            HttpStatus.INTERNAL_SERVER_ERROR.code,
            HttpStatus.INTERNAL_SERVER_ERROR.status,
            `Error occurred`
          )
        );
    } else {
      res
        .status(HttpStatus.OK.code)
        .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Post deleted`));
    }
  });
};
