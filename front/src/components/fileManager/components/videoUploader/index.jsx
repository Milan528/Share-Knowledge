import React, { createRef } from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import { StyledButton, StyledDeleteButton, UploadContainer } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';

const VideoUploader = (props) => {
  const { setFiles, files } = props;
  const inputRef = createRef();

  const onInputChange = (e) => {
    let files = Array.from(e.target.files);
    inputRef.current.value=""
    setFiles(files);
  };

  return (
    <UploadContainer>
      <StyledButton onClick={() => inputRef.current.click()}>
        <MovieIcon /> Dodaj video...
      </StyledButton>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onInputChange}
        accept=".mp4"
        multiple="multiple"
      />
      {files.length > 0 ? (
        <StyledDeleteButton
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => setFiles([])}
        >
          Delete videos
        </StyledDeleteButton>
      ) : null}
    </UploadContainer>
  );
};

export default VideoUploader;
