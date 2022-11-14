import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import Book from '@mui/icons-material/MenuBook';
import { Container, StyledSelect } from './styles';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../../../../redux/slices';

const ScrollableTabs = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.home.state.type);

  const handleChange = (event) => {
    dispatch(setType(event.target.value));
  };

  return (
    <Container>
      <FormControl>
        <InputLabel>Tip</InputLabel>
        <StyledSelect value={type} label="Tip" onChange={handleChange}>
          <MenuItem value={'all'}>
            <em>Sve</em>
          </MenuItem>
          <MenuItem value={'q'}>
            Pitanja <HelpIcon />
          </MenuItem>
          <MenuItem value={'a'}>
            Materijali <Book />
          </MenuItem>
        </StyledSelect>
      </FormControl>
    </Container>
  );
};

export default ScrollableTabs;
