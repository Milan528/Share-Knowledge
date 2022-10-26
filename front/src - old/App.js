import Router from "./router"
import React, { useEffect } from "react";
import ErrorDialog from "./components/errorDialog"
import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "./reduxThunk/actions";
import { handleError } from "./redux/app/slices";
import Loader from "./components/loader";

function App() {
  const dispatch = useDispatch();
  const app = useSelector(state => state.app);
  const { error, loading, token } = app;

  useEffect(() => { 
    if(token==="")
      dispatch(loginUser());
  }, [dispatch, token]);

  useEffect(() => { 
    localStorage.setItem("app", JSON.stringify(app))
  }, [app]);

  const viewToRender = (
    <>
      <Router/>
    </>
  )

  if (error) return <ErrorDialog handleError={handleError} error={error}/>;
  else if (loading) return <Loader />;
  else return viewToRender;
}

export default App;