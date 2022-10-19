const {getPostsRoute} = require("../urls");
const {getFilesPaths} = require("../../../tools/fileManager")
const post_tagTable = require("../../../tables/post_tag")
const postTable = require("../../../tables/post")
const tagsTable = require("../../../tables/tags")
const fileTable = require("../../../tables/file")
const tokenValidation = require("../../../tools/tokenValidation")

const result = (app) => {

    app.get(getPostsRoute, tokenValidation, async (req, res)=>{
        try{
            const {type, search, postsNumber, currentPageNumber} = req.query;
            const tagsArray = req.query.tags
            let tags = tagsArray.split(',')
            
            let postsIds=[];
            if(tags.length>0){
                postsIds = await post_tagTable.get_posts_with_required_tags(tags);
            }
            if(tagsArray.length>0 && postsIds.length==0){
                return res.json([])
            }
            
            const posts = await postTable.getAll(postsIds, search, type);
            
            let result=[];

            for (const post of posts) {
                const tagsIds = await post_tagTable.getByPostId(post.id)
                
                
                let tags=[];
                for (const t of tagsIds) {
                    let tag =await tagsTable.getById(t.tagId)
                    tags.push(tag[0])                
                }
                result.push({...post, tags: tags.map(tag => tag.tag)})
            }

            let result2 = [];
            for (const res of result) {
                const images = await fileTable.getByPostIdAndExtenstions(res.id, ["jpg", "png"])
                const paths = getFilesPaths(images);
                
                result2.push({...res, images: paths.map(p => p.path)})
            }

            result = [];
            for (const res of result2) {
                const documents = await fileTable.getByPostIdAndExtenstions(res.id, ["doc","docx", "pdf"])
                const paths = getFilesPaths(documents);

                result.push({...res, documents: paths.map(p => p.path)})
            }

            let DTO
            // postsNumber, currentPageNumber
            const postsNum = parseInt(postsNumber)
            const currentPageNum = parseInt(currentPageNumber)
            if(result.length<postsNum){
                DTO = {
                    posts: result,
                    pagesNumber: 1,
                    currentPageNumber: 1
                }
            }else{

                let postsTmp=[]
                console.log("numberOfPosts " + result.length)
                console.log("postsNumber " + postsNum)

                let pagesNumber = Math.ceil(result.length/postsNum)
                let startPostIndex=postsNum*(currentPageNum-1)
                
                for(let i=startPostIndex; i<startPostIndex+postsNum; i++){
                    if(i<result.length){
                        postsTmp.push(result[i])
                    }
                }

                DTO = {
                    posts: postsTmp,
                    pagesNumber: pagesNumber,
                    currentPageNumber: currentPageNum
                }
            }
            return res.json(DTO)
        }
        catch(e){
            return res.status(400).json({
                message: "error"
            });
        }
    })
}

module.exports = result;
