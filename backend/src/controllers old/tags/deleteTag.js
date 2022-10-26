const tagsTable = require("../../../tables/tags")
const {deleteTagRoute} = require("../urls");
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {
    app.post(deleteTagRoute, tokenValidation, async (req, res)=>{
        const {tag} = req.body

        try{
            let result = await tagsTable.deleteByTagValue(tag.tag)
            return res.json({
                status: "sucess",
            }) 
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }
    })
}

module.exports = result;
