import React, { createRef } from 'react';
import InsertPhoto from '@mui/icons-material/InsertPhoto';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { StyledButton } from './styles';
import { fileType } from '../../';

const FileUploader = (props) => {
  const { setFiles, type } = props;
  const inputRef = createRef();

  const onInputChange = (e) => {
    let files = Array.from(e.target.files);
    setFiles(files);
  };

  return (
    <>
      <StyledButton onClick={() => inputRef.current.click()}>
        {type === fileType.img ? (
          <>
            <InsertPhoto /> Dodaj slike...
          </>
        ) : (
          <>
            <AttachFileIcon /> Dodaj prilog...
          </>
        )}
      </StyledButton>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onInputChange}
        accept={type ? type : [...fileType].join(', ')}
        multiple="multiple"
      />
    </>
  );
};

export default FileUploader;
