const postTable = require("../../../tables/post")
const {deletePostRoute} = require("../urls");

const result = (app) => {
    app.post(deletePostRoute, async (req, res)=>{
        const {postId} = req.body

        try{
            await postTable.deleteById(postId)
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }
        
        // catch(e){
        //     return res.status(400).json({
        //         message: e.sqlMessage
        //     });
        // }
    })
}

module.exports = result;
