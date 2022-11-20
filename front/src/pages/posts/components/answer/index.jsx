import React from "react";
import Paper from "@mui/material/Paper";
import classStyles from "./styles";
import Status from "./details";
import Owner from "./owner";
import Description from "./description";
import Document from "./document";

const Post = () => {
  const classes = classStyles();

  return (
    <Paper className={classes.paper} elevation={0}>
      <Owner />
      <Description />
      <Document />
      <Status />
    </Paper>
  );
};

export default Post;
