import React from 'react';
import { StyledButton } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { loadSpecificPosts } from '../../../../reduxThunk/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleSerch = () => {
    dispatch(loadSpecificPosts());
  };

  return (
    <StyledButton
      onClick={handleSerch}
      variant="outlined"
      endIcon={<SearchIcon />}
    >
      Pretrazi
    </StyledButton>
  );
};

export default SearchBar;
