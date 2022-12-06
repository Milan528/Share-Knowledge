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
  StyledDeleteButton,
  VideoLinkInputContainer,
  VideoViewerContainer,
  DeleteVideoUrlButton,
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
import { Button, FormControl, InputAdornment, Tooltip } from '@mui/material';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import VideoViewer from '../../../../components/fileManager/components/videoViewer';

const Form = () => {
  const [type, setType] = useState('question');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          <MenuItem value={'question'}>Pitanje</MenuItem>
          <MenuItem value={'material'}>Materijal</MenuItem>
        </Select>
      </Type>
      <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <FileControlls>
        <ImageUploader setFiles={setImages} />
        {images.length > 0 ? (
          <StyledDeleteButton
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => setImages([])}
          >
            Delete images
          </StyledDeleteButton>
        ) : null}
        <FileUploader setFiles={setDocuments} />
        {documents.length > 0 ? (
          <StyledDeleteButton
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => setDocuments([])}
          >
            Delete files
          </StyledDeleteButton>
        ) : null}
      </FileControlls>
      <ImageViewer
        files={images.map((image) => ({
          src: URL.createObjectURL(image), //'http://localhost:4000/files/1.png'
          name: image.name, //'1.png'
        }))}
        setFiles={setImages}
      />
      <FileViewer
        files={documents.map((document) => ({
          src: URL.createObjectURL(document), //'http://localhost:4000/files/1.pdf'
          name: document.name, //'1.pdf'
        }))}
      />
      <VideoLinkInputContainer>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Dodaj video URL"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button color="primary" sx={{ p: '10px' }} aria-label="directions">
          <AddCircleIcon />
        </Button>
      </VideoLinkInputContainer>
      <VideoViewerContainer>
        <FormControl fullWidth>
          <InputLabel id="select-video">Odaberi video</InputLabel>
          <Select
            labelId="select-video"
            value={-1}
            label="Odaberi video"
            onChange={() => {}}
          >
            <MenuItem value={-1}>Nijedan</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Tooltip title="Obrisi selektovani video">
          <DeleteVideoUrlButton color="primary" variant="outlined">
            <DeleteIcon />
          </DeleteVideoUrlButton>
        </Tooltip>
      </VideoViewerContainer>

      <VideoViewer />

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
