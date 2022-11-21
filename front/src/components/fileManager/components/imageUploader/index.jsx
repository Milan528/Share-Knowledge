import React, { createRef } from 'react';
import InsertPhoto from '@mui/icons-material/InsertPhoto';
import { StyledButton } from './styles';

const ImageUploader = (props) => {
  const { setFiles } = props;
  const inputRef = createRef();

  const onInputChange = (e) => {
    let files = Array.from(e.target.files);
    setFiles(files);
  };

  return (
    <>
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
    </>
  );
};

export default ImageUploader;
