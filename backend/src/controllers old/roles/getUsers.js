const {getUsersRoute} = require("../urls");
const userTable = require("../../../tables/user")
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {
    app.get(getUsersRoute, tokenValidation, async (req, res)=>{
       
        try{
            let result = await userTable.getAll()
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
