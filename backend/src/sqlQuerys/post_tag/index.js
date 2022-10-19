const db = require("../../tools/db")
let sql;

const table = {
    create: async (postId, tagId) => {
        sql =`INSERT INTO post_tag (postId, tagId) `
        sql+=`VALUES ('${postId}','${tagId}'); `

        return await db(sql)
    },

    get_posts_with_required_tags: async (tags) => {
        let innerSQL;
        innerSQL = `SELECT postID, COUNT(*) AS tags_count `
        innerSQL += `FROM post_tag `
        innerSQL += `WHERE tagId in ('${tags[0]}'`
        for(let i=1; i<tags.length; i++){
            innerSQL+=`,'${tags[i]}'`
        }
        innerSQL += `) `
        innerSQL += `GROUP BY postId ` 

        sql = `SELECT postID `
        sql +=`FROM ( ${innerSQL} ) AS posts_with_required_tags `
        sql +=`WHERE tags_count=${tags.length}`

        return await db(sql)
    },

    getByPostId: async (postId) => {
        sql = `SELECT tagId FROM post_tag WHERE postId='${postId}'`    

        return await db(sql)
    },

    deleteByPostId: async (postId) => {
        sql =`DELETE FROM post_tag WHERE postId='${postId}'`

        return await db(sql)
    },
}

module.exports = table