import React, { useEffect } from 'react';
import Navbar from "../../components/navbar";
import Spacer from "../../components/spacer"
import classStyles from './styles';
import BottomBar from "./components/bottomBar";
import User from "./components/user"
import Role from "./components/role"
import Controlls from "./components/controlls"
import { useSelector, useDispatch } from "react-redux"
import { handleError } from "./redux/slices";
import ErrorDialog from "../../components/errorDialog"
import { loadData } from "./reduxThunk/actions";
import { clearUser } from "./redux/slices";
import Loader from "../../components/loader"

const Login = () => {
  const classes = classStyles();
  const dispatch = useDispatch();     
  const { error, loading } = useSelector(state => state.roles);
  
  useEffect(() => { 
    dispatch(loadData())
    return () => {dispatch(clearUser())}
  }, [dispatch]);

  const viewToRender = (
    <>
      <Navbar/>
      <div className={classes.rootContainer}>
        <Spacer/>
        <div className={classes.contentContainer}>
          <User/>
          <Role/>
          <Controlls/>
        </div>        
        <Spacer/>
      </div>  
      <BottomBar/>
    </>
  )

  if (error) return <ErrorDialog error={error} handleError={handleError}/>;
  else if (loading) return <Loader />;
  else return viewToRender;
}

export default Login;