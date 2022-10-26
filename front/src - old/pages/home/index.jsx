import React, {useEffect} from 'react';
import CreatePost from "./components/createPost";
import Search from "./components/search";
import Category from "./components/category";
import CurrentPage from "./components/currentPage";  
import Posts from "./components/posts";  
import Tags from "./components/tags";
import classStyles from './styles';
import Navbar from "../../components/navbar";
import { useSelector } from "react-redux"
import ErrorDialog from "../../components/errorDialog"
import Loader from "../../components/loader"
import { handleError } from "./redux/slices";
import { loadPage } from "./reduxThunk/actions";
import { useDispatch } from "react-redux"

const Home = () => {
    const classes = classStyles();
    const home = useSelector(state => state.home);
    const { error, loading } = home;
    const dispatch = useDispatch(); 

    useEffect(() => { 
      dispatch(loadPage())
    }, [dispatch]);

    useEffect(() => { 
      localStorage.setItem("home", JSON.stringify(home))
    }, [home]);

    const viewToRender = (
      <>
        <Navbar/>
        <div className={classes.rootContainer}>
            <div className={classes.contentContainer}>
              <CreatePost/>
              <Search/>
              <Tags/>
              <Category/>
              <Posts/>
              <CurrentPage/>
            </div>        
        </div>        
      </>
    )
    
    if (error) return <ErrorDialog error={error} handleError={handleError}/>;
    else if (loading) return <Loader />;
    else return viewToRender;
}

export default Home;