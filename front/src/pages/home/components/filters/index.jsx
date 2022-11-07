import React from 'react';
import {
  AdditionalFiltersContainer,
  FiltersContainer,
  StyledDivider,
} from './styles';
import SearchBar from './components/searchbar';
import Tags from './components/tags';
import Category from './components/category';
import Order from './components/order';

const Fliters = () => {
  return (
    <FiltersContainer>
      <SearchBar />
      <AdditionalFiltersContainer>
        <Tags />
        <Category />
      </AdditionalFiltersContainer>
      <Order />
      <StyledDivider />
    </FiltersContainer>
  );
};

export default Fliters;
