import React from 'react';
// import { useSelector, useDispatch } from "react-redux"
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText';
// import {getPosts} from "../../../../../src - old/pages/home/reduxThunk/actions"
// import {setCurrentPageNumber, setPostsNumber} from "../../../../../src - old/pages/home/redux/slices"
import { PaginationContainer } from './styles';

const PaginationComponent = () => {
  // const home = useSelector(state => state.home);
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
        <Pagination 
          // count={pagesNumber} 
          // page={currentPageNumber} 
          // onChange={handleCurrentPageNumberChange}

          count={10} 
          page={2}
        />

        <FormControl variant="standard">
          <Select
          // value={postsNumber}
          value={5}
          // onChange={handlePostNumberChange}
        >
          { [1,2,3,4,5,6,7,8,9,10].map(value => <MenuItem key={value} value={value}>{value}</MenuItem>) }
        </Select>
        <FormHelperText>Broj objava na strani</FormHelperText>
      </FormControl>
      </PaginationContainer>
    );
}

export default PaginationComponent;