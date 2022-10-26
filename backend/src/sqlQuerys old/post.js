const db = require("../../tools/db")
let sql;

const table = {
    create: async (title, text, type, likes, date, userId) => {
        sql =`INSERT INTO post (title, text, type, likes, date, userId) `
        sql+=`VALUES ('${title}','${text}','${type}','${likes}','${date}', '${userId}'); `
    
        return await db(sql)
    },

    deleteById: async (postId) => {
        sql =`DELETE FROM post WHERE id = '${postId}';`

        return await db(sql)
    },

    getAll: async (postsIds, search, type) => {
        sql = `SELECT * FROM post`

        if(postsIds.length>0 ){ //biramo odgovarajuce postove
            sql += ` WHERE`

            sql += ` id in ('${postsIds[0].postID}'` 
            for(let i=1; i<postsIds.length; i++){
                sql+=`,'${postsIds[i].postID}'`
            }   
            sql +=`)`
        }

        if(search.length > 0){
            if(postsIds.length>0 )
                sql += ` AND`
            else
                sql += ` WHERE`
                
            sql +=` title LIKE "%${search}%"`
        }
        sql += `;`
        return await db(sql)
    },

    getById: async (postId) => {
        sql =`SELECT * from post WHERE id='${postId}';`

        return await db(sql)
    }, 

    updateRow: async (postId, title,text,type,likes,date) => {
        sql =`UPDATE post `
        sql+=`SET `
        sql+=   `title='${title}', `
        sql+=   `text='${text}', `
        sql+=   `type='${type}', `
        sql+=   `likes='${likes}', `
        sql+=   `date='${date}' `
        sql+=`WHERE id='${postId}'`

        return await db(sql)
    }, 
}

module.exports = table