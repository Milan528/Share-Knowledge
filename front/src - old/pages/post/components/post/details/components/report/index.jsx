import React from "react";
import classStyles from "./styles";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import ReportIcon from "@material-ui/icons/Announcement";

const Post = (props) => {
  const classes = classStyles();

  return (
    <Button>
      <ReportIcon className={classes.date} />
    </Button>
  );
};

export default withRouter(Post);
