import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from './styles';

const FileSelector = (props) => {
  const { files } = props;
  const [fileIndex, setFileIndex] = useState(-1);
  // const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    let index = event.target.value;
    setFileIndex(index);
  };

  // useEffect(() => {
  //   if (fileIndex === -1) setSelectedFile(null);
  //   else setSelectedFile(files[fileIndex]);
  // }, [fileIndex]);

  useEffect(() => {
    if (files.length > 0) setFileIndex(0);
  }, [files]);

  console.log(files);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Odaberi fajl</InputLabel>
        <Select value={fileIndex} onChange={handleFileChange}>
          <MenuItem value={-1}>Nijedan</MenuItem>
          {files.map((file, index) => (
            <MenuItem key={index} value={index}>
              {file.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {fileIndex !== -1 ? (
        <>
          <a href={files[fileIndex]} download>
            Click to download
          </a>
          <Link onClick={() => window.open(files[fileIndex])}>Open file</Link>
        </>
      ) : null}
    </>
  );
};

export default FileSelector;
