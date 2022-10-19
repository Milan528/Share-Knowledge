
const result = (router) => {
    require("./routes/getEmails")(router)
    require("./routes/getTags")(router)
    require("./routes/insertOrUpdate")(router)
    require("./routes/deleteEmail")(router)
}

module.exports = result;
