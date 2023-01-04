import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadPostsForHomepageFilters } from '../../reduxThunk/actions';
import PostPreview from '../../../../components/postPreview';
import ErrorDialog from '../../../../components/errorDialogRedux';
import Loader from '../../../../components/loader';
import { setError } from './redux/slices';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { StyledPaper } from './styles';

const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.home.posts);
  const { loading, error, posts } = state;

  useEffect(() => {
    dispatch(loadPostsForHomepageFilters());
  }, [dispatch]);

  const postsView = () => {
    if (posts.length === 0) {
      return (
        <Fade in={true}>
          <StyledPaper elevation={4}>
            <Typography variant="h5">
              {'Sadržaj još uvek nije kreiran!'}
            </Typography>
          </StyledPaper>
        </Fade>
      );
    } else {
      return posts.map((data, index) => (
        <PostPreview key={index} data={data} />
      ));
    }
  };

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    postsView()
  );
};

export default Posts;
