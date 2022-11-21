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
  ImageUploader,
  ImageViewer,
} from '../../../../components/fileManager';
import { useNavigate } from 'react-router';
import { homeRoute } from '../../../../app/router/routes';

const Form = () => {
  const [role, setRole] = useState('pitanje');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  const handleTextareaChange = (event) => {
    // const value = event.target.value;
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setRole(value);
  };

  const handleTtileChange = (event) => {
    // const value = event.target.value;
  };

  const onSubmit = () => {};

  const onCancel = () => {
    navigate(homeRoute);
  };

  console.log(images);
  // console.log(documents);

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
      <ImageUploader setFiles={setImages} />
      <FileUploader setFiles={setDocuments} />
      <ImageViewer
        files={images.map((image) => ({
          src: URL.createObjectURL(image), //'http://localhost:4000/files/1.png'
          name: image.name, //'1.png'
        }))}
      />
      <FileViewer
        files={documents.map((document) => ({
          src: URL.createObjectURL(document), //'http://localhost:4000/files/1.pdf'
          name: document.name, //'1.pdf'
        }))}
      />

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
