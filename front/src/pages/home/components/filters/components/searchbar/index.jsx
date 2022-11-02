import React from 'react'
import { SearchBarContainer,StyledInput,StyledButton,SearchContent } from './styles';
import SearchIcon from "@mui/icons-material/Search";


const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchContent>
      <StyledInput placeholder='Pretrazi'></StyledInput>
        
        <StyledButton>
            <SearchIcon/>
        </StyledButton>
      </SearchContent>
       
    </SearchBarContainer>
  )
}

export default SearchBar