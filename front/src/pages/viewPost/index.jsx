import React, { useRef } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { AddCommentContainer, ContentContainer } from './styles';
import FirstPost from './components/post';
import Comments from './components/comments';
import CreateComment from './components/createComment';
import { useSelector } from 'react-redux';
import { AddComment } from './components/addComment';
import Heading from './components/heading';
import { setError } from './redux/slices';
import Loader from '../../components/loader';
import ErrorDialog from '../../components/errorDialog';

const ViewPost = () => {
  const createCommentRef = useRef(null);
  const token = useSelector((state) => state.app.token);
  const loading = useSelector((state) => state.viewPost.loading);
  const error = useSelector((state) => state.viewPost.error);

  const viewToRender = () => (
    <>
      <Navbar />
      <Heading />
      <ContentContainer>
        <FirstPost />
        <AddCommentContainer>
          <AddComment ref={createCommentRef} />
        </AddCommentContainer>
        <Comments />
        {token ? <CreateComment ref={createCommentRef} /> : null}
      </ContentContainer>
      <Footer />
    </>
  );

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    viewToRender()
  );
};

export default ViewPost;
