import * as services from "../../../services";
import * as urls from "./urls";
import {currentDate} from "../../../functions/date"
import { handleError, loading, setAllTags } from "../redux/slices";


export const addPost = () => async (dispatch, getState) => {
  try{
    dispatch(loading(true))

    const {createPost} = getState()
    const { title, text, type, likes, chosenTags, images, documents } = createPost;

    let DTO = {
      title: title,     //   title: "Ovo je naslov.",
      text: text,       //   text: "Ovo je sadrzaj",
      type: type,       //   type: "clan",
      likes: likes,     //   likes: 50,
      date: currentDate,//   date: currentDate,
      tags: chosenTags,       //   tags: [{id: 8, tag: "darjan"}, {id: 14, tag: "sada"}]
    }

    const posts = await services.post(urls.addPost, DTO)
    const {postId} = posts;

    for (const image of images) {
      let formData = new FormData();
      formData.append("file", image)
      formData.append("postId", postId);
      await services.postFile(urls.uploadFile, formData)
  }

    for (const document of documents) {
      let formData = new FormData();
      formData.append("file", document)
      formData.append("postId", postId);
      await services.postFile(urls.uploadFile, formData)
    }

    return true
  } catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 

export const getAllTags = () => async (dispatch, getState) => {
  try {
    dispatch(loading(true))
    const tags = await services.get(urls.getTags)
    dispatch(setAllTags(tags))
  } 
  catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 