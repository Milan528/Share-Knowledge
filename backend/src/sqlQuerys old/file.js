const db = require("../../tools/db")
let sql;

const table = {
    getByPostIdAndExtenstions: async (postId, extensions) => {
        sql =`SELECT * FROM file WHERE postId='${postId}' AND (ext='${extensions[0]}'`
        
        for(let i=1; i<extensions.length; i++)
            sql+=` OR ext='${extensions[i]}'`
       
        sql+=`)`

        return await db(sql)
    },
    
    getByPostId: async (postId) => {
        sql =`SELECT * FROM file WHERE postId='${postId}'`

        return await db(sql)
    },

    deleteByPostId: async (postId) => {
        sql =`DELETE FROM file WHERE postId='${postId}'`

        return await db(sql)
    },

    deleteByPostIdAndExtensions: async (postId, extensions) => {
        sql =`DELETE FROM file WHERE postId='${postId}' AND (ext='${extensions[0]}'`
        
        for(let i=1; i<extensions.length; i++)
            sql+=` OR ext='${extensions[i]}'`
       
        sql+=`)`

        return await db(sql)
    },
}

module.exports = table