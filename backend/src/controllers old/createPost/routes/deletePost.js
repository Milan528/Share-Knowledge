const postTable = require("../../../tables/post")
const {deletePostRoute} = require("../urls");
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {
    app.post(deletePostRoute, tokenValidation, async (req, res)=>{
        const {postId} = req.body
        //OBRISI TAGOVE, SLIKE I DOKUMENTE KOJI SU VEZANI ZA POST, IZ TABELA ALI I SA SERVERA
        try{
            await postTable.deleteById(postId)
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }
    })
}

module.exports = result;
