import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
// import {getPosts} from "../../../../../src - old/pages/home/reduxThunk/actions"
// import {setCurrentPageNumber, setPostsNumber} from "../../../../../src - old/pages/home/redux/slices"
import { PaginationContainer, StyledPagination } from './styles';
import PostsPerPageContainer from './components/postsPerPage';

const PaginationComponent = () => {
  const home = useSelector((state) => state.home.state);
  const { currentPage, postPerPage } = home;
  // const { postsNumber, pagesNumber, currentPageNumber } = home;
  // const dispatch = useDispatch();

  // const handleCurrentPageNumberChange = (event, paginationCurrentPage) => {
  //   dispatch(setCurrentPageNumber(paginationCurrentPage))
  //   dispatch(getPosts())
  // }

  // const handlePostNumberChange = (event) => {
  //   dispatch(setPostsNumber(event.target.value))
  //   dispatch(getPosts())
  // };

  return (
    <PaginationContainer>
      <StyledPagination
        // count={pagesNumber}
        // page={currentPageNumber}
        // onChange={handleCurrentPageNumberChange}

        count={10}
        page={2}
      />
      <PostsPerPageContainer />
    </PaginationContainer>
  );
};

export default PaginationComponent;
