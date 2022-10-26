import React from 'react';
import Navbar from "../../components/navbar";
import Motivation from "./components/motivation";
import classStyles from './styles';
import LoginForm from "./components/login";
import Google from "./components/google";
import Outlook from "./components/outlook";
import Logo from "./components/logo";
import BottomBar from "./components/bottomBar";
import { useSelector } from "react-redux"
import { handleError } from "./redux/slices";
import ErrorDialog from "../../components/errorDialog"
import Loader from "../../components/loader"

const Login = () => {
  const classes = classStyles();
  const { error, loading } = useSelector(state => state.login);

  const viewToRender = (
    <>
      <Navbar/>
      <div className={classes.rootContainer}>
        <div className={classes.motivationContainer}>
          <Logo/>
        </div>        
        <div className={classes.container}>
          <Motivation/>
          <LoginForm/>
          <div className={classes.extraButtons}>
            <Google/>
            <Outlook/>
          </div>
        </div>        
      </div>  
      <BottomBar/>      
    </>
  )

  if (error) return <ErrorDialog error={error} handleError={handleError}/>;
  else if (loading) return <Loader />;
  else return viewToRender;
}

export default Login;