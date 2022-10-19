
const result = (router) => {
    require("./routes/addTag")(router)
    require("./routes/deleteTag")(router)
    require("./routes/getTags")(router)
}

module.exports = result;
