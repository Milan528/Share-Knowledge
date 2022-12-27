import React, { useState } from 'react';
import {
  Container,
  StyledButton,
  StyledForm,
  StyledFormControl,
  StyledTextField,
} from './styles';
import { useSelector } from 'react-redux';
import { profileView } from '../sideNavbar/redux/state';
import { useSearchParams } from 'react-router-dom';
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MyTextField from './components/textField';

const UserInfo = () => {
  const view = useSelector((state) => state.profile.sideNavbar.profileView);

  const [searchParams] = useSearchParams();
  const usernameUrl = searchParams.get('username');
  const username = useSelector((state) => state.app.username);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [newUsername, setNewUsername] = useState(false);
  const [newPassword, setNewPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const editUserProfileView = (
    <>
      <h2>Ažuriraj</h2>

      {newPassword ? (
        <StyledFormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Nova šifra
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <VisibilityOff />
                </IconButton>
              </InputAdornment>
            }
            label="Nova šifra"
          />
        </StyledFormControl>
      ) : null}

      {newUsername ? (
        <StyledTextField label="Novo korisničko ime" variant="outlined" />
      ) : null}

      <StyledFormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Potvrdi trenutnom šifrom
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <VisibilityOff />
              </IconButton>
            </InputAdornment>
          }
          label="Potvrdi trenutnom šifrom"
        />
      </StyledFormControl>
      <StyledButton variant="outlined">Potvrdi</StyledButton>
    </>
  );

  return view === profileView.personalData && usernameUrl === username ? (
    <Container>
      <h2>Informacije</h2>
      <StyledForm noValidate>
        <MyTextField value="darjan@elfak.rs" label="Email" />
        <MyTextField
          value={username}
          label="Korisničko ime"
          editable
          clb={() => {
            setNewUsername(true);
            setNewPassword(false);
          }}
        />
        <MyTextField
          value="🔒"
          label="Šifra"
          editable
          clb={() => {
            setNewPassword(true);
            setNewUsername(false);
          }}
        />
      </StyledForm>
      {newUsername || newPassword ? editUserProfileView : null}
    </Container>
  ) : null;
};

export default UserInfo;
