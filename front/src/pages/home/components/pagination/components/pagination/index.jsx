import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledPagination } from './styles';
import { setCurrentPage } from '../../../../redux/slices';
import { loadSpecificPosts } from '../../../../reduxThunk/actions';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.home.state.currentPage);
  const totalNumberOfPages = useSelector(
    (state) => state.home.state.totalNumberOfPages
  );

  const handleCurrentPageNumberChange = (event, paginationCurrentPage) => {
    dispatch(setCurrentPage(paginationCurrentPage));
    dispatch(loadSpecificPosts());
  };

  return totalNumberOfPages ? (
    <StyledPagination
      onChange={handleCurrentPageNumberChange}
      count={totalNumberOfPages}
      page={currentPage}
    />
  ) : null;
};

export default Pagination;
