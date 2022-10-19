
SELECT *
FROM post
LEFT JOIN postdocument ON post.id=postdocument.postId
LEFT JOIN document ON postdocument.documentId=document.id
