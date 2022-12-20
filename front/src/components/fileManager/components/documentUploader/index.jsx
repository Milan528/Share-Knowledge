import React, { createRef } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { StyledButton, StyledDeleteButton, UploadContainer } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';

const DocumentUploader = (props) => {
  const { setFiles, files } = props;
  const inputRef = createRef();

  const onInputChange = (e) => {
    let files = Array.from(e.target.files);
    inputRef.current.value = '';
    setFiles(files);
  };

  return (
    <UploadContainer>
      <StyledButton onClick={() => inputRef.current.click()}>
        <AttachFileIcon /> Dodaj dokument...
      </StyledButton>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onInputChange}
        accept=".pdf, .doc*"
        multiple="multiple"
      />
      {files.length > 0 ? (
        <StyledDeleteButton
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => setFiles([])}
        >
          Delete files
        </StyledDeleteButton>
      ) : null}
    </UploadContainer>
  );
};

export default DocumentUploader;
