
const result = (router) => {
    require("./routes/getTags")(router)
    require("./routes/getPosts")(router)
}

module.exports = result;
