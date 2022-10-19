const localHosting = {
    port: 4000,
    adress: "http://localhost:4000/",
    storage: "files/",
}

const webHosting = {
    adress: "https://oglasnatabla.nutri4run.com/", 
    storage: "files/",
}

const server = require("./hosting")(localHosting, webHosting);
module.exports = server;
