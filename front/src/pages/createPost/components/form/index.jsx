import React, { useState } from 'react';
import {
  StyledPaper,
  StyledTextareaAutosize,
  Type,
  Tile,
  ControllsContainer,
  ControllsText,
  CancelButton,
  SubmitButton,
} from './styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '../../../../components/dialog';
import Tags from './components/tags';
import {
  FileUploader,
  FileViewer,
  fileType,
} from '../../../../components/fileManager';

const Form = () => {
  const [role, setRole] = useState('pitanje');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);

  const handleTextareaChange = (event) => {
    const value = event.target.value;
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setRole(value);
  };

  const handleTtileChange = (event) => {
    const value = event.target.value;
  };

  const onSubmit = () => {};

  const onCancel = () => {};

  return (
    <StyledPaper elevation={0}>
      <Tile label="Naslov" fullWidth onChange={handleTtileChange} />
      <StyledTextareaAutosize
        minRows={10}
        placeholder="Sadrzaj"
        onChange={handleTextareaChange}
      />
      <Type>
        <InputLabel>Tip</InputLabel>
        <Select value={role} onChange={handleTypeChange}>
          <MenuItem value={'pitanje'}>Pitanje</MenuItem>
          <MenuItem value={'materijal'}>Materijal</MenuItem>
        </Select>
      </Type>
      <Tags />

      <FileUploader setFiles={setImages} type={fileType.img} />
      <FileUploader setFiles={setDocuments} type={fileType.document} />

      <FileViewer files={images} type={fileType.img} />
      <FileViewer files={documents} type={fileType.document} />

      <ControllsContainer>
        <CancelButton onClick={onCancel} variant="outlined">
          <ControllsText variant="button" color="inherit">
            Odustani
          </ControllsText>
        </CancelButton>
        <SubmitButton onClick={onSubmit} variant="outlined">
          <ControllsText variant="button" color="inherit">
            Potvrdi
          </ControllsText>
        </SubmitButton>
        <Dialog message={message} setMessage={setMessage} />
      </ControllsContainer>
    </StyledPaper>
  );
};

export default Form;
