import React, { useRef } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { AddCommentContainer, ContentContainer } from './styles';
import FirstPost from './components/post';
import Comments from './components/comments';
import CreateComment from './components/createComment';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ViewPost = () => {
  const createCommentRef = useRef(null);

  return (
    <>
      <Navbar />
      <AddCommentContainer>
        <Button
          variant="contained"
          onClick={() => createCommentRef.current.scrollIntoView()}
          startIcon={<AddCircleIcon />}
        >
          komentar
        </Button>
      </AddCommentContainer>
      <ContentContainer>
        <FirstPost />
        <Comments />
        <CreateComment ref={createCommentRef} />
      </ContentContainer>
      <Footer />
    </>
  );
};

export default ViewPost;
