import * as services from "../../../services";
import * as urls from "./urls";
import { handleError, loading, setTags } from "../redux/slices";

export const loadData = () => async (dispatch, getState) => {
  try{
    dispatch(loading(true))
    const result = await services.get(urls.getTags)
    dispatch(setTags(result))
  } catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 

export const getTags = loadData;

export const deleteTag = (tag) => async (dispatch, getState) => {
  try{
      dispatch(loading(true))
      let DTO = {
        tag: tag
      }
      const result = await services.post(urls.deleteTag, DTO)
      const {status} = result;

      if(status==="sucess")
        return true;
  } catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 

export const addTag = (tag) => async (dispatch, getState) => {
  try{
      dispatch(loading(true))
      let DTO = {
        tag: tag
      }
      const result = await services.post(urls.addTag, DTO)
      const {status} = result;

      if(status==="sucess")
        return true;
  } catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 