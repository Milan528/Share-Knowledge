import React, { useEffect } from 'react';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from './redux/slices';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { ContentContainer, StyledH1 } from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import FirstPost from './components/post';
import { loadComments } from './reduxThunk/actions';
import Comments from './components/comments';
import CreateComment from './components/createComment';

const Post = (props) => {
  let location = useLocation();
  const post = location.state;
  const { error, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadComments(post.id));
  }, [dispatch, post.id]);

  const viewToRender = (
    <>
      <Navbar />
      <StyledH1> {post.type === 'answer' ? 'Materijal' : 'Pitanje'}</StyledH1>
      <ContentContainer>
        <FirstPost data={post} />
        <Comments />
        <CreateComment />
      </ContentContainer>
      {loading ? <Loader /> : null}
      <Footer />
    </>
  );

  if (error) return <ErrorDialog error={error} handleError={setError} />;
  else return viewToRender;
};

export default Post;
