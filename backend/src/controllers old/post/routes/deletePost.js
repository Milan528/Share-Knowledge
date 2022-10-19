const {deletePostRoute} = require("../urls");
const fileTable = require("../../../tables/file")
const post_tagTable = require("../../../tables/post_tag")
const post_Table = require("../../../tables/post")
const {deleteFiles} = require("../../../tools/fileManager")
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {

    app.post(deletePostRoute, tokenValidation, async (req, res)=>{
        const {postId} = req.body;

        try{
            const result = await fileTable.getByPostId(postId);
            deleteFiles(result)
            fileTable.deleteByPostId(postId)
    
            post_tagTable.deleteByPostId(postId);
            post_Table.deleteById(postId)
    
            return res.json(true)
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }
    })
}

module.exports = result;
