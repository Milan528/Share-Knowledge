import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Container,
  StyledDivider,
  StyledForm,
  StyledFormControl,
  StyledTextField,
} from './styles';
import { Button, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { profileView } from '../sideNavbar/redux/state';
import { useSearchParams } from 'react-router-dom';

const UserInfo = () => {
  const view = useSelector((state) => state.profile.sideNavbar.profileView);
  const [showPassword, setShowPassword] = useState(false);

  const [searchParams] = useSearchParams();
  const usernameUrl = searchParams.get('username');
  const username = useSelector((state) => state.app.username);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return view === profileView.personalData && usernameUrl === username ? (
    <>
      <h1>Informacije</h1>
      <Container>
        <StyledForm noValidate>
          <StyledTextField label="Email" variant="outlined" />
        </StyledForm>
        <StyledDivider />
        <StyledForm noValidate>
          <StyledTextField label="Username" variant="outlined" />
        </StyledForm>
        <StyledFormControl sx={{ width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
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
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </StyledFormControl>
        <Button variant="outlined">Azuriraj podatke</Button>
      </Container>
    </>
  ) : null;
};

export default UserInfo;
