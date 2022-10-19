const db = require("../../tools/db")

const table = {
    getByPostIdAndExtenstions: async (postId, extensions) => {
        const {q1} = require("./queries");
        let query = q1(postId, extensions)

        return await db(query)
    },
}

module.exports = table