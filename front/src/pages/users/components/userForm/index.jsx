import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Container, ControllsContainer } from './styles';

export const UserForm = () => {
  const [role, setRole] = useState('1');

  const handleUserChange = (e, user) => {};

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Container>
      <Autocomplete
        onChange={handleUserChange}
        options={[]}
        getOptionLabel={(option) =>
          option.length === 0 ? '' : option.username
        }
        style={{ width: 300, marginTop: '20px', marginBottom: '20px' }}
        renderInput={(params) => (
          <TextField {...params} label="Korisnicko ime" variant="outlined" />
        )}
      />
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Rola</InputLabel>
        <Select value={role} onChange={handleRoleChange} label="Rola">
          <MenuItem value="1">Član</MenuItem>
          <MenuItem value="2">Moderator</MenuItem>
          <MenuItem value="3">Admin</MenuItem>
        </Select>
      </FormControl>
      <ControllsContainer>
        <Button variant="outlined">Odustani</Button>
        <Button variant="outlined">Potvrdi</Button>
      </ControllsContainer>
    </Container>
  );
};

export default UserForm;
