import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import Book from '@mui/icons-material/MenuBook';
import { Container, StyledSelect, StyledMenuItem } from './styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../../../../redux/slices';
import { loadSpecificPosts } from '../../../../reduxThunk/actions';

const ScrollableTabs = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.home.state.type);

  const handleChange = (event) => {
    dispatch(setType(event.target.value));
    dispatch(loadSpecificPosts());
  };

  return (
    <Container>
      <FormControl>
        <InputLabel>Tip</InputLabel>
        <StyledSelect value={type} label="Tip" onChange={handleChange}>
          <StyledMenuItem value={'all'}>Sve</StyledMenuItem>
          <StyledMenuItem value={'question'}>
            Pitanja <HelpIcon />
          </StyledMenuItem>
          <StyledMenuItem value={'material'}>
            Materijali <Book />
          </StyledMenuItem>
        </StyledSelect>
      </FormControl>
    </Container>
  );
};

export default ScrollableTabs;
