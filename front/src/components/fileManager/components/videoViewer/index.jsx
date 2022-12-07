import React, {useState, useEffect} from 'react';
import { Link, VideoContainer } from './styles';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const VideoViewer = (props) => {
  const { files } = props; //files = [{src: URL.createObjectURL(...), name: "fileName"},...]
  const [fileIndex, setFileIndex] = useState(-1);
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
        <InputLabel>Odaberi video</InputLabel>
        <Select
          value={fileIndex}
          onChange={handleFileChange}
          label="Odaberi video"
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
          <Link onClick={() => window.open(selectedFile.src)}>
            Open file in new tab
          </Link>
          <VideoContainer>
            <iframe width="420" height="345" src={files[0].src}/>
          </VideoContainer>
        </>
      ) : null}
    </>
  ) : null
  
};

export default VideoViewer;