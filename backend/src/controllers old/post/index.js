
const result = (router) => {
    require("./routes/getPost")(router)
    require("./routes/checkOwner")(router)
    require("./routes/deletePost")(router)
}

module.exports = result;
