import React, { createRef, useState, Fragment } from "react";
import Button from "@mui/material/Button";
import InsertPhoto from "@mui/icons-material/InsertPhoto";
import classStyles from "./styles";
import Images from "./components/images";
import { useDispatch } from "react-redux";

const FileUploader = (props) => {
  const { setImages } = props;
  const classes = classStyles();
  const inputRef = createRef();
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  const removeImage = (file) => {
    let images = files.filter((f) => f !== file);
    setFiles(images);
  };

  const onInputChange = (e) => {
    let images = Array.from(e.target.files);
    setFiles(images);
    dispatch(setImages(images));
  };

  return (
    <Fragment>
      <Button
        className={classes.button}
        onClick={() => inputRef.current.click()}
      >
        <InsertPhoto /> Dodaj slike...
      </Button>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={onInputChange}
        accept=".jpg, .png"
        multiple="multiple"
      />
      <Images images={files} removeImage={removeImage} />
    </Fragment>
  );
};

export default FileUploader;
