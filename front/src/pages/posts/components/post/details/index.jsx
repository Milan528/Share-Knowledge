import React from 'react';
import classStyles from './styles';
import { withRouter } from 'react-router-dom';
import Spacer from "../../../../../components/spacer";
import Likes from "./components/likes"
import Date from "./components/date"
import Report from "./components/report"
import Delete from "./components/delete"
// import Edit from "./components/edit"
import {useSelector} from "react-redux"

const Post = (props) => {
  const classes = classStyles();
  // const { likes, postId, data, date } = props;
  const { likes, postId, date } = props;
  const app = useSelector(state => state.app);
  const { role } = app;
  const post = useSelector(state => state.post);
  const {postOwner} = post

  return (
    <div className={classes.container}>
      <Likes likes={likes} postId={postId}/>
      <Date date={date}/>
      <Spacer/>
      <Report/>
      {/* {postOwner || role==="admin" || role==="moderator" ? <Edit data={data} />:null} */}
      {postOwner || role==="admin" || role==="moderator" ? <Delete postId={postId}/>:null}
    </div>
  );
}

export default withRouter(Post);