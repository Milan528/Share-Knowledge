import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Container, ControllsContainer, StyledTextField } from './styles';
import Loader from '../../../../components/loader';
import ErrorDialog from '../../../../components/errorDialog';
import { setError } from './redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadUsernamesWithRoles,
  updateUserRole,
} from '../../reduxThunk/actions';
import { userRole } from '../../../../utils/enums';

export const UserForm = () => {
  // const [role, setRole] = useState('1');
  const [role, setRole] = useState('');
  // const { error, loading, allUsers, user, role } = useSelector(
  //   (state) => state.users.userForm
  // );
  const { error, loading, allUsers } = useSelector(
    (state) => state.users.userForm
  );
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(loadUsernamesWithRoles());
  }, [dispatch]);

  const handleOnChange = (event, value) => {
    console.log(value);
    if (value) {
      setSelectedUser(value);
    } else {
      setSelectedUser(null);
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(updateUserRole(selectedUser.username, selectedUser.role));
  };

  const viewToRender = (
    <Container>
      <Autocomplete
        fullWidth
        onChange={handleOnChange}
        options={allUsers}
        getOptionLabel={(option) =>
          option.length === 0 ? '' : option.username
        }
        style={{ marginTop: '20px', marginBottom: '10px' }}
        renderInput={(params) => (
          <TextField {...params} label="Korisničko ime" variant="outlined" />
        )}
      />
      <StyledTextField
        label="Stara rola"
        disabled
        InputProps={{
          readOnly: true,
        }}
        value={selectedUser ? selectedUser.role : ''}
        fullWidth
      />
      <FormControl variant="outlined" fullWidth disabled={!selectedUser}>
        <InputLabel id="demo-simple-select-label">Nova rola</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedUser ? role : ''}
          onChange={handleRoleChange}
          label="Nova rola"
        >
          <MenuItem value={userRole.visitor}>Član</MenuItem>
          <MenuItem value={userRole.moderator}>Moderator</MenuItem>
          <MenuItem value={userRole.admin}>Admin</MenuItem>
        </Select>
      </FormControl>
      <ControllsContainer>
        <Button variant="outlined">Odustani</Button>
        <Button
          variant="outlined"
          disabled={!selectedUser}
          onClick={handleSubmit}
        >
          Potvrdi
        </Button>
      </ControllsContainer>
    </Container>
  );

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    viewToRender
  );
};

export default UserForm;
