const {changeRoleRoute} = require("../urls");
const userTable = require("../../../tables/user")
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {
    app.post(changeRoleRoute, tokenValidation, async (req, res)=>{
        const {username, role} = req.body

        try{
            let result = await userTable.updateRole(role, username)
            return res.json({status: "sucess"})  
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }
    })
}

module.exports = result;
