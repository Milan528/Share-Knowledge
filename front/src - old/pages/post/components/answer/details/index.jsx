import React from "react";
import Typography from "@mui/material/Typography";
import classStyles from "./styles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Today from "@mui/icons-material/Today";
import Button from "@mui/material/Button";
import { withRouter } from "react-router-dom";
import Announcement from "@mui/icons-material/Announcement";
import Spacer from "../../../../../components/spacer";

const Post = (props) => {
  const classes = classStyles();

  return (
    <div className={classes.controlls}>
      <Button>
        <ThumbUpIcon />
        <Typography color="textSecondary" className={classes.like}>
          {" "}
          13{" "}
        </Typography>
      </Button>
      <div className={classes.date}>
        <Today />
        <Typography> 24.03.2020 </Typography>
      </div>
      <Spacer />
      <Button className={classes.report}>
        <Announcement className={classes.date} />
      </Button>
    </div>
  );
};

export default withRouter(Post);
