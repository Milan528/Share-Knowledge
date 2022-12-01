import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Viewer from 'react-file-viewer';
import { Link, FileContainer } from './styles';

const FileViewer = (props) => {
  const { files } = props; //files = [{src: URL.createObjectURL(...), name: "fileName"},...]
  const [fileIndex, setFileIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    let index = event.target.value;
    setFileIndex(index);
  };

  useEffect(() => {
    if (files.length > 0 && fileIndex !== -1) setSelectedFile(files[fileIndex]);
    else setSelectedFile(null);
  }, [files, fileIndex]);

  return files.length > 0 ? (
    <>
      <FormControl fullWidth>
        <InputLabel>Odaberi fajl</InputLabel>
        <Select
          value={fileIndex}
          onChange={handleFileChange}
          label="Odaberi fajl"
        >
          <MenuItem value={-1}>Nijedan</MenuItem>
          {files.map((file, index) => (
            <MenuItem key={index} value={index}>
              {file.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedFile !== null ? (
        <>
          <a href={selectedFile.src} download>
            Click to download
          </a>
          {selectedFile.name.includes('.pdf') ? (
            <Link onClick={() => window.open(selectedFile.src)}>
              Open file in new tab
            </Link>
          ) : null}
          <FileContainer>
            <Viewer
              fileType={selectedFile.name.split('.')[1]}
              filePath={selectedFile.src}
            />
          </FileContainer>
        </>
      ) : null}
    </>
  ) : null;
};

export default FileViewer;
