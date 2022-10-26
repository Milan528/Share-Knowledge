import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import classStyles from "./styles";
import { useDispatch } from "react-redux";
import { setText } from "../../redux/slices";

const TextArea = () => {
  const classes = classStyles();
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    dispatch(setText(value));
  };

  return (
    <TextareaAutosize
      minRows={10}
      placeholder=""
      className={classes.textArea}
      onChange={onChange}
    />
  );
};

export default TextArea;
