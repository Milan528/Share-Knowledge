import * as services from "../../../services";
import * as urls from "./urls";
import { handleError, loading, setPost, pushDocument, setPostOwner, clearDocuments} from "../redux/slices";

export const loadData = (postId) => async (dispatch, getState) => {
  try{
    dispatch(loading(true))
    const result = await services.getURLParams(urls.getPost, { postId: postId })
    dispatch(setPost(result))

    const { documents } = result;
    dispatch(clearDocuments())
    for (let i=0; i<documents.length;i++){
      const document = await services.getFile(urls.getFile, {filePath: documents[i]})
      
      let path = documents[i].split("/");
      let filename = path[path.length-1] 
      let ext = filename.split(".")[1];

      let file = new File([document], filename, {type:'.'+ext}); 
      //it will work without {type:'.'+ext}, because type will be 
      //calculated again later from path inside pdfReader and fileReader

      dispatch(pushDocument(file))
    }

    const {app} = getState()
    const { token } = app;
    const { userId } = result;
    
    const DTO = {
      userId: userId, token: token
    }
    const ownerBoolean = await services.getURLParams(urls.checkOwner, DTO)
    
    dispatch(setPostOwner(ownerBoolean))
  } catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 

export const deletePost = (postId) => async (dispatch, getState) => {
  try{
      dispatch(loading(true))
    
      const result = await services.post(urls.deletePost, { postId: postId })
      return result
  } catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 