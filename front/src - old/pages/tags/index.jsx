import React, { useEffect } from 'react';
import Navbar from "../../components/navbar";
import Spacer from "../../components/spacer"
import classStyles from './styles';
import BottomBar from "./components/bottomBar";
import DeleteTag from "./components/deleteTag"
import AddTag from "./components/addTag"
import { useSelector, useDispatch } from "react-redux"
import { handleError } from "./redux/slices";
import ErrorDialog from "../../components/errorDialog"
import Loader from "../../components/loader"
import { loadData } from "./reduxThunk/actions";

const Login = () => {
  const classes = classStyles();
  const dispatch = useDispatch();     
  const { error, loading } = useSelector(state => state.tags);

  useEffect(() => { 
    dispatch(loadData())
  }, [dispatch]);

  const viewToRender = (
    <>
      <Navbar/>
      <div className={classes.rootContainer}>
        <Spacer/>
        <div className={classes.contentContainer}>
          <AddTag/>
        </div>       
        <div className={classes.contentContainer}>
          <DeleteTag/>
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