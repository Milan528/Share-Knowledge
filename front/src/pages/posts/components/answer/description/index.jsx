import React from "react";
import classStyles from "./styles";
import Typography from "@mui/material/Typography";

const Post = () => {
  const classes = classStyles();

  return (
    <Typography className={classes.text}>
      Lako je, objasnjenje mozes naci u uputstvima ispod:
    </Typography>
  );
};

export default Post;
