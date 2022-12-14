import React from 'react';
import { useSelector } from 'react-redux';
import { profileView } from '../sideNavbar/redux/state';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { loadPostsForSpecificUser } from '../../reduxThunk/actions';
// import Post from './components/post';
// import ErrorDialog from '../../../../components/errorDialog/index';
// import Loader from '../../../../components/loader';
// import { setError } from './redux/slices';
// import Typography from '@mui/material/Typography';
// import Fade from '@mui/material/Fade';
// import { StyledPaper } from './styles';

const Posts = () => {
  const view = useSelector((state) => state.profile.sideNavbar.profileView);
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.home.posts);
  // const { loading, error, posts } = state;

  // useEffect(() => {
  //   const userId = 1;
  //   // dispatch(loadPostsForSpecificUser(userId));
  // }, [dispatch]);

  // const postsView = () => {
  //   if (posts.length === 0) {
  //     return (
  //       <Fade in={true}>
  //         <StyledPaper elevation={4}>
  //           <Typography variant="h5">
  //             {'Sadržaj još uvek nije kreiran!'}
  //           </Typography>
  //         </StyledPaper>
  //       </Fade>
  //     );
  //   } else {
  //     return posts.map((data, index) => <Post key={index} data={data} />);
  //   }
  // };

  // return error ? (
  //   <ErrorDialog error={error} handleError={setError} />
  // ) : loading ? (
  //   <Loader />
  // ) : (
  //   postsView()
  // );

  return view === profileView.posts ? <h1>List of posts...</h1> :  null
};

export default Posts;
