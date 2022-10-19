const {getPostRoute} = require("../urls");
const {getFilesPaths} = require("../../../tools/fileManager")
const postTable = require("../../../tables/post")
const post_tagTable = require("../../../tables/post_tag")
const tagsTable = require("../../../tables/tags")
const fileTable = require("../../../tables/file")
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {

    app.get(getPostRoute, tokenValidation, async (req, res)=>{
        let postId=req.query.postId

        try{
            let post = await postTable.getById(postId)
            post = post[0]        
            
            const tagsIds = await post_tagTable.getByPostId(post.id)
            
            let tags=[];
            for (const t of tagsIds) {
                let tag = await tagsTable.getById(t.tagId)
                tags.push(tag[0])                
            }

            let result={...post, tags: tags}
            const images = await fileTable.getByPostIdAndExtenstions(result.id, ["jpg", "png"])
            let paths = getFilesPaths(images);
            let result2 = {...result, images: paths.map(p => p.path)}
            
            const documents = await fileTable.getByPostIdAndExtenstions(result2.id, ["doc","docx", "pdf"])
            paths = getFilesPaths(documents);
            result = {...result2, documents: paths.map(p => p.path)}

            res.json(result)
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }
    })
}

module.exports = result;
