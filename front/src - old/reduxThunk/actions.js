import * as services from "../services";
import * as urls from "./urls";
import { loading, handleError, setUser } from "../redux/app/slices";

export const loginUser = () => async (dispatch, getState) => {
  try{
    dispatch(loading(true))
    
    const result = await services.get(urls.guestLoginRoute)
    const {token, role} = result;
    
    dispatch(setUser({token, role, loggedIn: false}))
  } 
  catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 


