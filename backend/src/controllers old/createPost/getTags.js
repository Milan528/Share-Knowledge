const {getTagsRoute}= require("../urls");
const tagsTable = require("../../../tables/tags")
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {
    app.get(getTagsRoute, tokenValidation, async (req, res)=>{
        try{
            let tags = await tagsTable.getAll();
            return res.json(tags) 
        }
        catch(e){
            return res.status(400).json({
                message: e.sqlMessage
            });
        }
    
    })
}

module.exports = result;
