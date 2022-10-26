import React from "react";
import classStyles from "./styles";
import Typography from "@material-ui/core/Typography";

const Text = (props) => {
  const classes = classStyles();
  const { text } = props;

  return <Typography className={classes.text}>{text}</Typography>;
};

export default Text;
