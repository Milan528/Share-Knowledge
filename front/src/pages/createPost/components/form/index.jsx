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
  ImageUploaderViewerContainer,
  FileUploaderViewerContainer,
  VideoUploaderViewerContainer,
  AttatchemntsContainer,
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
  VideoUploader,
  VideoViewer
} from '../../../../components/fileManager';
import { useNavigate } from 'react-router';
import { homeRoute } from '../../../../app/router/routes';
import { addPost } from '../../reduxThunk/actions';
import { useDispatch } from 'react-redux';


const Form = () => {
  const [type, setType] = useState('question');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [videos, setVideos] = useState([]);
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

  console.log(videos)

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

      <AttatchemntsContainer 
        attatchemntExists={images.length>0 || documents.length>0 || videos.length > 0}
      >
        <ImageUploaderViewerContainer>
          <ImageUploader setFiles={setImages} files={images} />
          <ImageViewer
            files={images.map((image) => ({
              src: URL.createObjectURL(image), //'http://localhost:4000/files/1.png'
              name: image.name, //'1.png'
            }))}
            setFiles={setImages}
            />
        </ImageUploaderViewerContainer>

        <FileUploaderViewerContainer>
          <FileUploader setFiles={setDocuments} files={documents} />
          <FileViewer
            files={documents.map((document) => ({
              src: URL.createObjectURL(document), //'http://localhost:4000/files/1.pdf'
              name: document.name, //'1.pdf'
            }))}
            />
        </FileUploaderViewerContainer>

        <VideoUploaderViewerContainer>
          <VideoUploader setFiles={setVideos} files={videos}/>
          <VideoViewer
            files={videos.map((video) => ({
              src: URL.createObjectURL(video), //'http://localhost:4000/files/1.pdf'
              name: video.name, //'1.pdf'
            }))}
            />
        </VideoUploaderViewerContainer>
      </AttatchemntsContainer>

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
