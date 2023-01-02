import React, { useEffect } from 'react';
import { Order } from './components/order';
import { StyledDivider } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import PostPreview from '../../../../../../components/postPreview';
import ErrorDialog from '../../../../../../components/errorDialog';
import Loader from '../../../../../../components/loader';
import { setError } from './redux/slices';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { StyledPaper } from './styles';
import { useSearchParams } from 'react-router-dom';
import { loadUserPosts } from '../../../../reduxThunk/actions';

const Posts = () => {
  const order = useSelector((state) => state.profile.posts.order);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile.posts);
  const { loading, error, posts } = state;
  const [searchParams] = useSearchParams();
  const username = searchParams.get('username');

  useEffect(() => {
    if (username) dispatch(loadUserPosts(username, order));
  }, [dispatch, username, order]);

  const postsView = () => {
    if (posts.length === 0) {
      return (
        <>
          <StyledDivider />
          <Fade in={true}>
            <StyledPaper elevation={4}>
              <Typography variant="h5">Nema kreiranih objava!</Typography>
            </StyledPaper>
          </Fade>
        </>
      );
    } else {
      return (
        <>
          <Order />
          <StyledDivider />
          {posts.map((data, index) => (
            <PostPreview key={index} data={data} />
          ))}
        </>
      );
    }
  };

  const viewToRender = () => {
    return (
      <>
        <h1>Objave</h1>

        {postsView()}
        {loading ? <Loader /> : null}
      </>
    );
  };

  return error ? (
    <ErrorDialog error={error} setError={() => dispatch(setError(null))} />
  ) : (
    viewToRender()
  );
};

export default Posts;
