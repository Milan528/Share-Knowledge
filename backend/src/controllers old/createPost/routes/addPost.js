const {addPostRoute} = require("../urls");
const userTable = require("../../../tables/user");
const postTable = require("../../../tables/post");
const post_tagTable = require("../../../tables/post_tag");
// const sendEmail = require("../../../tools/nodemailer");
// const email_tagTable = require("../../../tables/email_tag");
// const email_Table = require("../../../tables/email");
const tokenValidation = require("../../../tools/tokenValidation")


const result = (app) => {
    app.post(addPostRoute, tokenValidation, async (req, res)=>{
        const {title,text,type,likes,date, tags, token} = req.body
        // console.log(req.user)
        let user = await userTable.getByUsername(req.user.name)
        try{
            let result = await postTable.create(title, text, type, likes, date, user[0].id)
            const {insertId : postId} = result;

            for (const tag of tags) {
                await post_tagTable.create(postId, tag.id)
            }    

            let tagsIds = []; // [ '1', '2' ]
            if(tags.length>0){
                tagsIds = tags.map(t => t.id.toString())
            }
            
            // let emailsIds=[];
            // if(tags.length>0){
            //     emailsIds = await email_tagTable.get_emails_with_required_tags(tagsIds);
            // }


            // for (const e of emailsIds) {
            //     let email = await email_Table.getById(e.emailId)
            //     email = email[0]

            //     let mail = {
            //         to: email.address,
            //         subject: title,
            //         text: text
            //     };

            //     sendEmail(mail)
            // }  

            return res.json({
                postId: postId,
            })  
        }
        catch(e){
            console.log(e)
            return res.status(400).json({
                message: "error"
            });
        }
    })
}

module.exports = result;
