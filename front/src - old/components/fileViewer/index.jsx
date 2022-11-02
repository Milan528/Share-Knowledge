import React, { useState } from "react";
import FileReader from "./components/fileReader";
import PDFReader from "./components/pdfReader";
import classStyles from "./styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FileUploader = (props) => {
  const classes = classStyles();
  const { files } = props;
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(-1);

  const fileExtension = (file) => {
    let filename = file.name.split(".");
    return filename[1];
  };

  const changeSelectedFile = (event) => {
    let index = event.target.value;

    setSelectedFile(index);

    if (index === -1) setFile(null);
    else setFile(files[index]);
  };

  return (
    <>
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel>Odaberi fajl</InputLabel>
        <Select value={selectedFile} onChange={changeSelectedFile}>
          <MenuItem value={-1}>
            <em>Nijedan</em>
          </MenuItem>
          {files.map((file, index) => (
            <MenuItem key={index} value={index}>
              {file.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {file != null && fileExtension(file) !== "pdf" ? (
        <FileReader file={file} />
      ) : null}
      {file != null && fileExtension(file) === "pdf" ? (
        <PDFReader file={file} />
      ) : null}
    </>
  );
};

export default FileUploader;
