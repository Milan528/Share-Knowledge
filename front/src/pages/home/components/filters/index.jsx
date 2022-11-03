import React from 'react'
import { FiltersSearchBar, FiltersContainer } from './styles'
import SearchBar from "./components/searchbar"
import Tags from "./components/tags"

const Fliters = () => {
  return (
    <FiltersContainer>
      <FiltersSearchBar>
       <SearchBar/>
      </FiltersSearchBar>
      <Tags/>
  </FiltersContainer>
  )
}

export default Fliters