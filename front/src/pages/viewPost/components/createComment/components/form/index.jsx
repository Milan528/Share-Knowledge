import React, { useEffect, useState } from 'react';
import {
  StyledPaper,
  StyledTextareaAutosize,
  ControllsContainer,
  ControllsText,
  SubmitButton,
  FileControlls,
  StyledDeleteButton,
  ErrorHolder,
} from './styles';
import Dialog from '../../../../../../components/dialog';
import {
  FileUploader,
  FileViewer,
  ImageUploader,
  ImageViewer,
} from '../../../../../../components/fileManager';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSearchParams } from 'react-router-dom';
import { addComment } from '../../../../reduxThunk/actions';

const Form = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [description, setDescription] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  let postID = searchParams.get('postId');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      setMessage('');
      setDescription('');
      setImages([]);
      setDocuments([]);
    }
  }, [loading]);

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
        images,
        documents,
      };
      dispatch(addComment(setError, setLoading, comment, postID));
    }
  };

  return (
    <StyledPaper elevation={0}>
      <StyledTextareaAutosize
        minRows={10}
        placeholder="Sadrzaj"
        onChange={handleTextareaChange}
        value={description}
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
