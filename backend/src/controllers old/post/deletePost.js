const { deletePostRoute } = require('../urls');
const fileTable = require('../../../tables/file');
const post_tagTable = require('../../../tables/post_tag');
const post_Table = require('../../../tables/post');
const { deleteFiles } = require('../../../tools/fileManager');
const tokenValidation = require('../../../tools/tokenValidation');
const fs = require('fs');

const result = (app) => {
  app.post(deletePostRoute, tokenValidation, async (req, res) => {
    const { postId } = req.body;

    try {
      const result = await fileTable.getByPostId(postId);

      for (const file of result) {
        fs.unlink('files/' + file.path, (err) => {
          console.log(err);
        });
      }

      fileTable.deleteByPostId(postId);

      post_tagTable.deleteByPostId(postId);
      post_Table.deleteById(postId);

      return res.json(true);
    } catch (e) {
      return res.status(400).json({
        message: 'error'
      });
    }
  });
};

module.exports = result;
