const userTable = require("../../../tables/user");
const {loginUserRoute} = require("../urls");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const result = (app) => {
    app.post(loginUserRoute, async (req, res)=>{
        const {username, password} = req.body
        console.log("Aaaaaaaaaaaaaaaaaaaaaa")
        try{
            let result = await userTable.getByUsername(username)

            if(result.length===0){ //username doesnt exist
                throw "userDoesntExist"
            }
            
            if(await bcrypt.compare(password, result[0].password)){//passwords does match

                const user = {name: username}
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
                console.log("NEW TOKEN ON LOGIN")
                console.log(accessToken)
                return res.json({
                    token: accessToken,
                    role: result[0].role
                })
            }else{
                throw "userDoesntExist"
            }
        }
        catch(e){
            return res.status(400).json({
                message: e
            });
        }
    })
}

module.exports = result;
