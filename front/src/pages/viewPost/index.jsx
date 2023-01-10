import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { AddCommentContainer, ContentContainer } from './styles';
import FirstPost from './components/post';
import Comments from './components/comments';
import CreateComment from './components/createComment';
import { useSelector } from 'react-redux';
import { AddComment } from './components/addComment';
import Heading from './components/heading';
import ShowAttachments from './components/showAttachments';

const ViewPost = () => {
  const createCommentRef = useRef(null);
  const token = useSelector((state) => state.app.token);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Heading />
      <ContentContainer>
        <ShowAttachments />
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
