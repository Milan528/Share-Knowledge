import React from "react";
import classStyles from "./styles";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/slices";

const Title = () => {
  const classes = classStyles();
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    dispatch(setTitle(value));
  };

  return (
    <TextField
      label="Naslov"
      className={classes.title}
      fullWidth
      onChange={onChange}
    />
  );
};

export default Title;
