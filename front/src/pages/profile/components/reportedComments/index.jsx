import React, { useEffect } from 'react';
import { profileView } from '../sideNavbar/redux/state';
import { StyledDivider } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import ErrorDialog from '../../../../components/errorDialog';
import Loader from '../../../../components/loader';
import { setError } from './redux/slices';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { StyledPaper } from './styles';
import { loadReportedComments } from '../../reduxThunk/actions';
import CommentPreview from './components/commentPreview';

const ReportedComments = () => {
  const view = useSelector((state) => state.profile.sideNavbar.profileView);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile.comments);
  const { loading, error, comments } = state;

  useEffect(() => {
    if (view === profileView.reportedComments) dispatch(loadReportedComments());
  }, [dispatch, view]);

  const postsView = () => {
    if (comments.length === 0) {
      return (
        <>
          <StyledDivider />
          <Fade in={true}>
            <StyledPaper elevation={4}>
              <Typography variant="h5">Nema prijavljenih komentara!</Typography>
            </StyledPaper>
          </Fade>
        </>
      );
    } else {
      return (
        <>
          <StyledDivider />
          {comments.map((data, index) => (
            <CommentPreview key={index} data={data} />
          ))}
        </>
      );
    }
  };

  const viewToRender = () => {
    if (view === profileView.reportedComments) {
      return (
        <>
          <h1>Prijavljeni komentari</h1>

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

export default ReportedComments;
