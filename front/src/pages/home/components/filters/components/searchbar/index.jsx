import React from 'react'
import { SearchBarContainer,StyledInput,StyledButton,SearchContent, Container } from './styles';
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Container>
      <SearchBarContainer>
        <SearchContent>
        <StyledInput placeholder='Pretrazi'></StyledInput>
          <StyledButton>
              <SearchIcon/>
          </StyledButton>
        </SearchContent>
      </SearchBarContainer>
    </Container>
  )
}

export default SearchBar