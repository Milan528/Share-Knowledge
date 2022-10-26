const tagsTable = require("../../../tables/tags")
const tokenValidation = require("../../../tools/tokenValidation")
const {getTagsRoute} = require("../urls");

const result = (app) => {
    app.get(getTagsRoute, tokenValidation, async (req, res)=>{

        try{
            let result = await tagsTable.getAll()
            return res.json(result)
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }
    })
}

module.exports = result;
