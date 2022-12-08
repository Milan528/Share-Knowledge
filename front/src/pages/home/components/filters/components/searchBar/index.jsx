import React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import debounce from '../../../../../../utils/debounce';
import { setSearch } from '../../../../redux/slices';
import { loadSpecificPosts } from '../../../../reduxThunk/actions';

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.home.state.search);

  const handleOnChange = (event) => {
    dispatch(setSearch(event.target.value));
    dispatch(loadSpecificPosts());
  };

  return (
    <TextField label="Search" defaultValue={search} onChange={debounce(handleOnChange, 500)} />
  );
};

export default Search;
