import React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import debounce from '../../../../../../utils/debounce';
import { setSearch } from '../../../../redux/slices';
import { loadPostsForHomepageFilters } from '../../../../reduxThunk/actions';

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.home.search);

  const handleOnChange = (event) => {
    dispatch(setSearch(event.target.value));
    dispatch(loadPostsForHomepageFilters());
  };

  return (
    <TextField
      label="Pretraga po naslovu ili sadržaju"
      defaultValue={search}
      onChange={debounce(handleOnChange, 500)}
    />
  );
};

export default Search;
