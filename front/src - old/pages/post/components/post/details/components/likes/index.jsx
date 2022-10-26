import React from "react";
import Typography from "@material-ui/core/Typography";
import classStyles from "./styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Button from "@material-ui/core/Button";
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
