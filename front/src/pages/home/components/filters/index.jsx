import React from 'react'
import { AdditionalFiltersContainer, FiltersContainer, StyledDivider } from './styles'
import SearchBar from "./components/searchbar"
import Tags from "./components/tags"
import Category from "./components/category"

const Fliters = () => {
  return (
    <FiltersContainer>
      <SearchBar/>
      <AdditionalFiltersContainer>
        <Tags/>
        <Category/>
      </AdditionalFiltersContainer>
      <StyledDivider/>
    </FiltersContainer>
  )
}

export default Fliters