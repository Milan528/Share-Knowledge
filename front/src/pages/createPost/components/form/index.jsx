import React, { useEffect, useState } from 'react';
import {
  StyledPaper,
  StyledTextareaAutosize,
  Type,
  Tile,
  ControllsContainer,
  ControllsText,
  CancelButton,
  SubmitButton,
  FileControlls,
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
import { addPost } from '../../reduxThunk/actions';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Form = () => {
  const [type, setType] = useState('pitanje');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(documents);
  }, [documents]);

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setType(value);
  };

  const handleTtileChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const checkPostParams = () => {
    if (title.trim() === '') {
      setMessage('Title can not be empty.');
      return false;
    } else if (description.trim() === '') {
      setMessage('Description can not be empty.');
      return false;
    } else if (selectedTags.length === 0) {
      setMessage('Select at least one tag for your post.');
      return false;
    } else return true;
  };

  const onSubmit = () => {
    if (checkPostParams()) {
      const post = {
        title,
        description,
        selectedTags,
        type,
        images,
        documents,
      };
      dispatch(addPost(post));
    }
  };

  const onCancel = () => {
    navigate(homeRoute);
  };

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
        <Select value={type} onChange={handleTypeChange}>
          <MenuItem value={'pitanje'}>Pitanje</MenuItem>
          <MenuItem value={'materijal'}>Materijal</MenuItem>
        </Select>
      </Type>
      <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <FileControlls>
        <ImageUploader setFiles={setImages} />
        <FileUploader setFiles={setDocuments} />
        {documents.length > 0 ? (
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => setDocuments([])}
          >
            Delete files
          </Button>
        ) : null}
      </FileControlls>
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
