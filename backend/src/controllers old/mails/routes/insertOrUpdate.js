const {insertOrUpdateRoute} = require("../urls");
const emailTable = require("../../../tables/email");
const email_tagTable = require("../../../tables/email_tag");


const result = (app) => {
    app.post(insertOrUpdateRoute, async (req, res)=>{
        const {email, tags} = req.body

        try{
            if(email.id==-1){
                let result = await emailTable.insert(email.address)

                const {insertId} = result; 
                for(const tag of tags){
                    await email_tagTable.insert(insertId, tag.id);
                }
            }else{
                let result = await email_tagTable.deleteById(email.id)
                
                for(const tag of tags){
                    await email_tagTable.insert(email.id, tag.id);
                }
            }

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
