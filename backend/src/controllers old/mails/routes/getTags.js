const {getTagsRoute} = require("../urls");
const tagsTable = require("../../../tables/tags")
const email_tagTable = require("../../../tables/email_tag")

const result = (app) => {

    app.get(getTagsRoute, async (req, res)=>{

        try{
            let emailId=req.query.id

            let allTags = await tagsTable.getAll();
            let chosenTags = []

            if(emailId!=-1){
                let email_tags=await email_tagTable.getByEmailId(emailId);

                for (const et of email_tags) {
                    let tag = await tagsTable.getById(et.tagId)
                    chosenTags.push(tag[0])                
                }
            }

            return res.json({chosenTags: chosenTags, allTags: allTags})
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }
    })
}

module.exports = result;
