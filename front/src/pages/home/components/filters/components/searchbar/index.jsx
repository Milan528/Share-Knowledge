import React from 'react';
import {
  SearchBarContainer,
  StyledInput,
  StyledButton,
  SearchContent,
  Container,
} from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { loadSpecificPosts } from '../../../../reduxThunk/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleSerch = () => {
    dispatch(loadSpecificPosts());
  };
  
  return (
    <Container>
      <SearchBarContainer>
        <SearchContent>
          <StyledInput placeholder="Pretrazi"></StyledInput>
          <StyledButton onClick={handleSerch}>
            <SearchIcon />
          </StyledButton>
        </SearchContent>
      </SearchBarContainer>
    </Container>
  );
};

export default SearchBar;
