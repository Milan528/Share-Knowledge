import React from "react";
import Paper from "@material-ui/core/Paper";
import classStyles from "./styles";
import Title from "./title";
import Text from "./text";
import Tags from "./tags";
import Documents from "./documents";
import Images from "./images";
import Divider from "@material-ui/core/Divider";
import Details from "./details";
import User from "./user";

const Post = (props) => {
  const classes = classStyles();
  const { data } = props;
  const { title, type, text, images, documents, tags, likes, id, date } = data;

  return (
    <Paper className={classes.paper} elevation={0}>
      <User type={type} />
      <Title title={title} />
      <Text text={text} />
      <Images images={images} />
      <Documents documents={documents} />
      <Divider className={classes.devider} />
      <Tags tags={tags} />
      <Details likes={likes} postId={id} data={data} date={date} />
    </Paper>
  );
};

export default Post;
