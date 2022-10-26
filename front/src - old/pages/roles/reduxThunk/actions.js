import * as services from "../../../services";
import * as urls from "./urls";
import { handleError, loading, setUsers } from "../redux/slices";

export const loadData = () => async (dispatch, getState) => {
  try{
    dispatch(loading(true))
    const result = await services.get(urls.getUsers)
    dispatch(setUsers(result))
  } catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 

export const changeRole = (username, role) => async (dispatch, getState) => {
  try{
      dispatch(loading(true))
      let DTO = {
        username: username, 
        role: role
      }
      const result = await services.post(urls.changeRole, DTO)
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