import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { loadTags } from '../../../../reduxThunk/actions';
import debounce from '../../../../../../components/debounce';

const Search = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.home.tags);

  const handleOnInputChange = (event, value) => {
    console.log(value);
  };

  const handleOnChange = (event, value) => {
    console.log(value);
  };

  useEffect(() => {
    dispatch(loadTags());
  }, [dispatch]);

  return (
    <Autocomplete
      disablePortal
      onInputChange={debounce(handleOnInputChange, 500)}
      onChange={handleOnChange}
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
};

export default Search;

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
];
