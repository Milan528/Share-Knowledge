import { setUser } from "../../../redux/app/slices";
import * as services from "../../../services";
import * as urls from "./urls";
import { handleError, loading } from "../redux/slices";

export const login = (username, password) => async (dispatch, getState) => {
  const DTO = {
    username: username, 
    password: password
  }

  try{
    dispatch(loading(true))
    const result = await services.post(urls.loginUser, DTO)
    const {token, role} = result;
    dispatch(setUser({token, role, loggedIn: true}))
    return true
  } catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 