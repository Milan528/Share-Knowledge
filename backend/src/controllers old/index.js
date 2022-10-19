
const result = (router) => {
    require("./login")(router)
    require("./register")(router)
    require("./roles")(router)
    require("./tags")(router)
    require("./home")(router)
    require("./post")(router)
    require("./createPost")(router)
    require("./mails")(router)
    require("./components")(router)
}

module.exports = result;
