
const result = (router) => {
    require("./routes/getUsers")(router)
    require("./routes/changeRole")(router)
}

module.exports = result;
