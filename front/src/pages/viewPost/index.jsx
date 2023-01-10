import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { AddCommentContainer, ContentContainer } from './styles';
import FirstPost from './components/post';
import Comments from './components/comments';
import CreateComment from './components/createComment';
import { useDispatch, useSelector } from 'react-redux';
import { AddComment } from './components/addComment';
import Heading from './components/heading';
import ShowAttachments from './components/showAttachments';
import { setPostIndex } from './components/post/redux/slices';

const ViewPost = () => {
  const createCommentRef = useRef(null);
  const token = useSelector((state) => state.app.token);
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => dispatch(setPostIndex(null));
  }, [dispatch]);

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
