const {checkOwnerRoute} = require("../urls");
const userTable = require("../../../tables/user")
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {

    app.get(checkOwnerRoute, tokenValidation, async (req, res)=>{
        const {userId, user} = req.query;

        try{
            let rows = await userTable.getByUsername(user)
            if(rows.length>0 && rows[0].id==userId)
                return res.json(true)
            else
                return res.json(false)
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }
    })
}

module.exports = result;
