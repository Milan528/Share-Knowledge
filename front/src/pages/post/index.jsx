import React, { useEffect } from 'react';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';
import { useSelector } from 'react-redux';
import { setError } from './redux/slices';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { ContentContainer, StyledH1 } from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import FirstPost from './components/post';

const Post = (props) => {
  let location = useLocation();
  const post = location.state;
  // const {postId} = props.location.state;
  // const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.post);

  // useEffect(() => {
  //   dispatch(loadData(postId))
  // }, [dispatch, postId]);

  const viewToRender = (
    <>
      <Navbar />
      {post.type === 'answer' ? (
        <StyledH1>Materijal</StyledH1>
      ) : (
        <StyledH1>Pitanje</StyledH1>
      )}
      <ContentContainer>
        <FirstPost data={post} />
        {/* <div className={classes.contentContainer}>
        {post!=null ? <PostComponent data={post}/> : null}
        <Answer/>
        <CreateAnswer/>
      </div> */}
      </ContentContainer>
      {loading ? <Loader /> : null}
      <Footer />
    </>
  );

  if (error) return <ErrorDialog error={error} handleError={setError} />;
  else return viewToRender;
};

export default Post;
