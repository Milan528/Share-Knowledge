const {deleteEmailRoute} = require("../urls");
const email_tagTable = require("../../../tables/email_tag");
const emailTable = require("../../../tables/email");
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {
    app.post(deleteEmailRoute, tokenValidation, async (req, res)=>{
        const {id: emailId} = req.body
        
        try{
            await email_tagTable.deleteById(emailId);
            await emailTable.deleteById(emailId);
            
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
