import React, { createRef, useState, Fragment } from "react";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import classStyles from "./styles";
import FileViewer from "../fileViewer";
import { useDispatch } from "react-redux";

const FileUploader = (props) => {
  const { setDocuments } = props;
  const classes = classStyles();
  const inputRef = createRef();
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    let documents = Array.from(e.target.files);
    setFiles(documents);
    dispatch(setDocuments(documents));
  };

  return (
    <Fragment>
      <Button
        className={classes.button}
        onClick={() => inputRef.current.click()}
      >
        <AttachFileIcon /> Dodaj prilog...
      </Button>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={onInputChange}
        accept=".pdf, .doc*"
        multiple="multiple"
      />
      <FileViewer files={files} />
    </Fragment>
  );
};

export default FileUploader;
