import React from "react";
import Typography from "@mui/material/Typography";
import classStyles from "./styles";

const Post = (props) => {
  const classes = classStyles();
  const { title } = props;

  return (
    <div className={classes.container}>
      <div className={classes.container}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default Post;
