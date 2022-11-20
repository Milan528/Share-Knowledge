import React from "react";
import Typography from "@mui/material/Typography";
import classStyles from "./styles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Button from "@mui/material/Button";
import { withRouter } from "react-router-dom";

const Post = (props) => {
  const classes = classStyles();
  // const { likes, postId } = props;

  return (
    <Button>
      <ThumbUpIcon />
      <Typography color="textSecondary" className={classes.like}>
        {" "}
        50{" "}
      </Typography>
    </Button>
  );
};

export default withRouter(Post);
