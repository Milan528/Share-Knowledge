import React, { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import Book from '@mui/icons-material/MenuBook';
import { Container } from './styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const ScrollableTabs = () => {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <FormControl>
        <InputLabel>Tip</InputLabel>
        <Select value={age} label="Tip" onChange={handleChange}>
          <MenuItem value={10}>
            Pitanja <HelpIcon />
          </MenuItem>
          <MenuItem value={20}>
            Materijali <Book />
          </MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

export default ScrollableTabs;
