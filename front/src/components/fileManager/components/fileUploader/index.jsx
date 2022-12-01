import React, { createRef } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { StyledButton } from './styles';

const FileUploader = (props) => {
  const { setFiles } = props;
  const inputRef = createRef();

  const onInputChange = (e) => {
    let files = Array.from(e.target.files);
    setFiles(files);
    inputRef.current.value = '';
  };

  return (
    <>
      <StyledButton onClick={() => inputRef.current.click()}>
        <AttachFileIcon /> Dodaj prilog...
      </StyledButton>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onInputChange}
        accept=".pdf, .doc*"
        multiple="multiple"
      />
    </>
  );
};

export default FileUploader;
