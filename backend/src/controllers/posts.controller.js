import QUERYS from "../sqlQuerys/posts.querys.js";
import database from "../database/database.js";
import HttpStatus from "../tools/httpStatus.js";
import Response from "../tools/response.js";

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
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            `No posts found`
          )
        );
    } else {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            `Posts retrieved`,
            { posts: results }
          )
        );
    }
  });
};

export const putPosts = (req, res) => {
  return "Put posts!";
};
