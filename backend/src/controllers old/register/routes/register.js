const {registerUserRoute} = require("../urls");
const userTable = require("../../../tables/user");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


const result = (app) => {
    app.post(registerUserRoute, async (req, res)=>{
        const {username, password} = req.body
        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            await userTable.create(username, hashedPassword)

            const user = {name: username}
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

            const userData = await userTable.getByUsername(username)
            return res.json({
                token: accessToken,
                role: userData[0].role
            })    
        }
        catch(e){
            console.log(e)

            return res.status(400).json({
                message: e.sqlMessage
            });
        }

    })
}

module.exports = result;
