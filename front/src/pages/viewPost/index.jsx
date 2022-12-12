import React, { useRef, useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { AddCommentContainer, ContentContainer } from './styles';
import FirstPost from './components/post';
import Comments from './components/comments';
import CreateComment from './components/createComment';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { loginRoute } from '../../app/router/routes';

const ViewPost = () => {
  const createCommentRef = useRef(null);
  const token = useSelector((state) => state.app.token);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPostIndex] = useState(
    location.state ? location.state.selectedPostIndex : null
  );
  const homepageFilters = location.state ? location.state.homepageFilters : null;
  const [searchParams] = useSearchParams();
  const postID = searchParams.get('postId');

  const handleCreateComment = () => {
    if (token) {
      createCommentRef.current.scrollIntoView();
    } else {
      navigate(
        {
          pathname: loginRoute,
        },
        {
          state: {
            homepageFilters,
            selectedPostIndex,
            from: location.pathname,
            searchParams: `postId=${postID}`,
          },
        }
      );
    }
  };

  return (
    <>
      <Navbar />
      <AddCommentContainer>
        <Button
          variant="contained"
          onClick={handleCreateComment}
          startIcon={<AddCircleIcon />}
        >
          komentar
        </Button>
      </AddCommentContainer>
      <ContentContainer>
        <FirstPost />
        <Comments />
        {token ? <CreateComment ref={createCommentRef} /> : null}
      </ContentContainer>
      <Footer />
    </>
  );
};

export default ViewPost;
