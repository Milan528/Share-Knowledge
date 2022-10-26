const db = require("../../tools/db")
let sql;

const table = {
    getByUsername: async (username) => {
        sql =`SELECT COUNT(1) as exist, role `
        sql+=`FROM user `
        sql+=`WHERE username='${username}';`

        return await db(sql)
    },

    create: async (username, password) => {
        sql =`INSERT INTO user (username, password, role) `
        sql+=`VALUES ('${username}', '${password}', 'posetilac'); `

        return await db(sql)
    },

    getByUsername: async (username) => {
        sql =`SELECT * FROM user WHERE username='${username}';`

        return await db(sql)
    },
    
    updateRole: async (role, username) => {
        sql  =`UPDATE user `
        sql +=`SET role = '${role}' ` 
        sql +=`WHERE username = '${username}'; `

        return await db(sql)
    },

    getAll: async () => {
        sql ="SELECT * from user";

        return await db(sql)
    },

}

module.exports = table