import React from 'react';
import classStyles from './styles';
import { withRouter } from 'react-router-dom';
import {useSelector } from "react-redux"
import Pagination from '@material-ui/lab/Pagination';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText';
import {getPosts} from "../../reduxThunk/actions"
import {setCurrentPageNumber, setPostsNumber} from "../../redux/slices"
import { useDispatch } from "react-redux"

const CurrentPage = () => {
  const classes = classStyles();
  const home = useSelector(state => state.home);
  const { postsNumber, pagesNumber, currentPageNumber } = home;
  const dispatch = useDispatch(); 

  const handleCurrentPageNumberChange = (event, paginationCurrentPage) => {
    dispatch(setCurrentPageNumber(paginationCurrentPage))
    dispatch(getPosts())
  }

  const handlePostNumberChange = (event) => {
    dispatch(setPostsNumber(event.target.value))
    dispatch(getPosts())
  };

  return (
      <div className={classes.container}>
        <Pagination 
          count={pagesNumber} 
          page={currentPageNumber} 
          onChange={handleCurrentPageNumberChange}
        />

        <FormControl variant="standard">
          <Select
          value={postsNumber}
          onChange={handlePostNumberChange}
        >
          { [1,2,3,4,5,6,7,8,9,10].map(value => <MenuItem key={value} value={value}>{value}</MenuItem>) }
        </Select>
        <FormHelperText>Broj objava na strani</FormHelperText>
      </FormControl>
      </div>
    );
}

export default withRouter(CurrentPage);