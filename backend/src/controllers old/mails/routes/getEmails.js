const {getEmailsRoute} = require("../urls");
const emailTable = require("../../../tables/email")
const email_tagTable = require("../../../tables/email_tag")
const tagsTable = require("../../../tables/tags")

const result = (app) => {

    app.get(getEmailsRoute, async (req, res)=>{

        try{
            let emails = await emailTable.getAll()
            res.json(emails)
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }

    })
}

module.exports = result;
