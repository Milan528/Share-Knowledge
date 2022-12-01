import React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import debounce from '../../../../../../components/debounce';
import { setSearch } from '../../../../redux/slices';

const Search = () => {
  const dispatch = useDispatch();

  const handleOnInputChange = (event) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <TextField label="Search" onChange={debounce(handleOnInputChange, 500)} />
  );
};

export default Search;
