import React from "react";
import Paper from "@mui/material/Paper";
import classStyles from "./styles";
import Title from "./components/formTitle";
import Description from "./components/description";
import FileUploaderViewer from "../../../../components/fileUploaderViewer";
import Controlls from "./components/controlls";

const CreateAnswer = () => {
  const classes = classStyles();

  return (
    <Paper className={classes.paper} elevation={0}>
      <Title />
      <Description />
      <FileUploaderViewer />
      <Controlls />
    </Paper>
  );
};

export default CreateAnswer;
