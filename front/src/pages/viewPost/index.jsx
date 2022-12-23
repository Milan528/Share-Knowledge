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

const ViewPost = () => {
  const createCommentRef = useRef(null);
  const token = useSelector((state) => state.app.token);

  return (
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
};

export default ViewPost;
