
const result = (router) => {
    require("./routes/addPost")(router)
    require("./routes/deletePost")(router)
    require("./routes/getTags")(router)
}

module.exports = result;
