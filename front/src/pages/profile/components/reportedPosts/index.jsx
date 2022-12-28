import React, { useEffect } from 'react';
import { profileView } from '../sideNavbar/redux/state';
import { PostPreviewContainer, StyledDivider } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import PostPreview from '../../../../components/postPreview';
import ErrorDialog from '../../../../components/errorDialog';
import Loader from '../../../../components/loader';
import { setError } from './redux/slices';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { StyledPaper } from './styles';
import { loadReportedPosts } from '../../reduxThunk/actions';
import DismissReport from './components/dismissReport';

const ReportedPosts = () => {
  const view = useSelector((state) => state.profile.sideNavbar.profileView);
  const order = useSelector((state) => state.profile.posts.order);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile.posts);
  const { loading, error, posts } = state;

  useEffect(() => {
    if (view === profileView.reportedPosts) dispatch(loadReportedPosts());
  }, [dispatch, view, order]);

  console.log(posts);

  const postsView = () => {
    if (posts.length === 0) {
      return (
        <>
          <StyledDivider />
          <Fade in={true}>
            <StyledPaper elevation={4}>
              <Typography variant="h5">Nema prijavljenih objava!</Typography>
            </StyledPaper>
          </Fade>
        </>
      );
    } else {
      return (
        <>
          <StyledDivider />
          {posts.map((data, index) => (
            <PostPreviewContainer key={index}>
              <PostPreview data={data} />
              <DismissReport
                postId={data.id}
                reportedById={data.reportedById}
              />
            </PostPreviewContainer>
          ))}
        </>
      );
    }
  };

  const viewToRender = () => {
    if (view === profileView.reportedPosts) {
      return (
        <>
          <h1>Prijavljene objave</h1>

          {postsView()}
          {loading ? <Loader /> : null}
        </>
      );
    } else return null;
  };

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : (
    viewToRender()
  );
};

export default ReportedPosts;
