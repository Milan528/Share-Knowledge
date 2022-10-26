const db = require("../../tools/db")
let sql;

const table = {
    getAll: async () => {
        sql =`SELECT * from tags;`

        return await db(sql)
    },

    getById: async (tagId) => {
        sql =`SELECT * FROM tags where id=${tagId}`

        return await db(sql)
    },

    create: async (tag) => {
        sql =`INSERT INTO tags (tag) `
        sql+=`VALUES ('${tag}'); `

        return await db(sql)
    },

    deleteByTagValue: async (tag) => {
        sql =`DELETE FROM tags WHERE tag = '${tag}';`
        
        return await db(sql)
    },
}

module.exports = table