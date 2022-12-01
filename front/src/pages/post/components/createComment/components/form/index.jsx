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
  ErrorHolder,
} from './styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '../../../../../../components/dialog';
import Tags from './components/tags';
import {
  FileUploader,
  FileViewer,
  ImageUploader,
  ImageViewer,
} from '../../../../../../components/fileManager';
import { useNavigate } from 'react-router';
import { homeRoute } from '../../../../../../app/router/routes';
// import { addPost } from '../../reduxThunk/actions';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom';
import { addComment } from '../../../../reduxThunk/actions';
import { currentDate } from '../../../../../../components/date';

const Form = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [description, setDescription] = useState('');

  let location = useLocation();
  let postID = location.state.id;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(documents);
  }, [documents]);

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const checkCommentParams = () => {
    if (description.trim() === '') {
      setMessage('Description can not be empty.');
      return false;
    } else return true;
  };

  const onSubmit = () => {
    if (checkCommentParams()) {
      const comment = {
        postID,
        description,
        currentDate,
        images,
        documents,
      };
      dispatch(addComment(setError, setLoading, comment));
    }
  };

  const onCancel = () => {
    navigate(homeRoute);
  };

  return (
    <StyledPaper elevation={0}>
      <StyledTextareaAutosize
        minRows={10}
        placeholder="Sadrzaj"
        onChange={handleTextareaChange}
      />
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
      <ControllsContainer>
        <SubmitButton disabled={loading} onClick={onSubmit} variant="outlined">
          <ControllsText variant="button" color="inherit">
            Postavi komentar
          </ControllsText>
        </SubmitButton>
        <Dialog message={message} setMessage={setMessage} />
      </ControllsContainer>

      <ErrorHolder exists={error === '' ? false : true}>
        {error + '   '}
        <span onClick={() => setError('')}>Ok</span>
      </ErrorHolder>
    </StyledPaper>
  );
};

export default Form;
