import React from "react";
import classStyles from "./styles";
import Typography from "@mui/material/Typography";

const Text = (props) => {
  const classes = classStyles();
  const { text } = props;

  return text === "" ? null : (
    <Typography className={classes.text}>{text}</Typography>
  );
};

export default Text;
