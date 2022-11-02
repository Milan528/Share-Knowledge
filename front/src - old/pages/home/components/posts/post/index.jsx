import React from "react";
import Paper from "@mui/material/Paper";
import classStyles from "./styles";
import Title from "./title";
import Details from "./details";
import Tags from "./tags";
import Text from "./text";
import Images from "./images";
import Documents from "./documents";

const Post = (props) => {
  const classes = classStyles();
  const { data } = props;
  const { title, type, text, images, documents, tags, likes, id, date } = data;

  return (
    <Paper className={classes.paper} elevation={0}>
      <Title title={title} type={type} />
      <Text text={text} />
      <Images images={images} />
      <Documents documents={documents} />
      <Tags tags={tags} />
      <Details likes={likes} postId={id} date={date} />
    </Paper>
  );
};

export default Post;
