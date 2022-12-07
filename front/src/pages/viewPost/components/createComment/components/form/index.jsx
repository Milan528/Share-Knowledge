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
  AttatchemntsContainer,
  ImageUploaderViewerContainer,
  FileUploaderViewerContainer,
  VideoUploaderViewerContainer,
} from './styles';
import Dialog from '../../../../../../components/dialog';
import {
  FileUploader,
  FileViewer,
  ImageUploader,
  ImageViewer,
  VideoUploader,
  VideoViewer,
} from '../../../../../../components/fileManager';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addComment } from '../../../../reduxThunk/actions';

const Form = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [videos, setVideos] = useState([]);
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
      setVideos([]);
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
