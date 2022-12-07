import React, { createRef } from 'react';
import InsertPhoto from '@mui/icons-material/InsertPhoto';
import { StyledButton, StyledDeleteButton, UploadContainer } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';

const ImageUploader = (props) => {
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
        <InsertPhoto /> Dodaj slike...
      </StyledButton>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onInputChange}
        accept=".jpg, .png"
        multiple="multiple"
      />
      {files.length > 0 ? (
        <StyledDeleteButton
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => setFiles([])}
        >
          Delete images
        </StyledDeleteButton>
      ) : null}
    </UploadContainer>
  );
};

export default ImageUploader;
