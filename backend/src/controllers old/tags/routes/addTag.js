const db = require("../../../tools/db")
const tagsTable = require("../../../tables/tags")
const {addTagRoute} = require("../urls");
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {
    app.post(addTagRoute, tokenValidation, async (req, res)=>{
        const {tag} = req.body
        
        try{
            let result = await tagsTable.create(tag)
            return res.json({
                status: "sucess",
                dbResponse: result,
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
