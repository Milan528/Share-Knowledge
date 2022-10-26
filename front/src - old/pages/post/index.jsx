import React, { Fragment, useEffect } from 'react';
import Navbar from "../../components/navbar";
import classStyles from './styles';
import Spacer from "../../components/spacer";
import PostComponent from "./components/post";
import Answer from "./components/answer";
import CreateAnswer from "./components/createAnswer"
import { withRouter } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { loadData } from "./reduxThunk/actions";
import ErrorDialog from "../../components/errorDialog"
import Loader from "../../components/loader"
import { handleError } from "./redux/slices";
import { useSelector } from "react-redux"

const Post = (props) => {
  const classes = classStyles();
  const {postId} = props.location.state;
  const dispatch = useDispatch(); 
  const { error, loading, post} = useSelector(state => state.post);

  useEffect(() => { 
    dispatch(loadData(postId))
  }, [dispatch, postId]);

  const viewToRender = (
    <Fragment>
    <Navbar/>
    <div className={classes.container}>
      <Spacer/>
      <div className={classes.contentContainer}>
        {post!=null ? <PostComponent data={post}/> : null}
        <Answer/>
        <CreateAnswer/>
      </div>        
      <Spacer/>
    </div> 
  </Fragment>
  )

  if (error) return <ErrorDialog error={error} handleError={handleError}/>;
  else if (loading) return <Loader />;
  else return viewToRender;
}

export default withRouter(Post);