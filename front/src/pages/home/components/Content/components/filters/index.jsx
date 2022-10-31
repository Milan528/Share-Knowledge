import React from 'react'
import { StyledButton, buttonSize,  } from '../../../../../../components/styles'
import { FiltersContainer, FiltersContent,FiltersSearchBar } from './styles'
import SearchBar from "./components/searchbar"
import Tags from "./components/tags"

const Fliters = () => {
  return (

    <FiltersContainer>
      <FiltersContent>
        <h2>Imaš pitanje ili material?</h2>
        <StyledButton marginLeft="8px" backgroudColor="#18d4de" textColor='white' size={buttonSize.md}>KREIRAJ OBJAVU</StyledButton>
      </FiltersContent>
      <FiltersSearchBar>
       <SearchBar/>
      </FiltersSearchBar>
       <Tags/>
    </FiltersContainer>

  )
}

export default Fliters