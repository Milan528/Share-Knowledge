const {guestLoginRoute} = require("../urls");
const jwt = require('jsonwebtoken')

const result = (app) => {
    app.get(guestLoginRoute, async (req, res)=>{
        try{
            const accessToken = jwt.sign({name: "guest"}, process.env.ACCESS_TOKEN_SECRET)

            return res.json({
                token: accessToken,
                role: "posetioc"
            })
        }
        catch(e){
            console.log("Bbbbbbbbbbbbbbbbbbbbbbbbb")
            return res.status(400).json({
                message: e
            });
        }
    })
}

module.exports = result;
