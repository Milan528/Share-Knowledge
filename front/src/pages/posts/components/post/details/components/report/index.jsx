import React from "react";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import { withRouter } from "react-router-dom";
import ReportIcon from "@mui/icons-material/Announcement";

const Post = (props) => {
  const classes = classStyles();

  return (
    <Button>
      <ReportIcon className={classes.date} />
    </Button>
  );
};

export default withRouter(Post);
