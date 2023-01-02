import React, { useState } from 'react';
import {
  Container,
  StyledButton,
  StyledForm,
  StyledFormControl,
  StyledTextField,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MyTextField from './components/textField';
import { useEffect } from 'react';
import {
  loadUserInfo,
  changeAccountPassword,
  changeAccountUsername,
} from '../../../../reduxThunk/actions';
import Loader from '../../../../../../components/loader';
import ErrorDialog from '../../../../../../components/errorDialog';

const UserInfo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const usernameUrl = searchParams.get('username');
  const username = useSelector((state) => state.app.username);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [usernameUpdate, setUsernameUpdate] = useState(false);
  const [passwordUpdate, setPasswordUpdate] = useState(false);

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  const handleSubmitPasswordUpdate = () => {
    dispatch(
      changeAccountPassword(
        newPassword,
        confirmedPassword,
        user.email,
        setLoading,
        setError,
        setUser
      )
    );
  };

  const handleSubmitUsernameUpdate = () => {
    dispatch(
      changeAccountUsername(
        newUsername,
        confirmedPassword,
        user.email,
        setLoading,
        setError,
        setUser
      )
    );
  };

  useEffect(() => {
    dispatch(loadUserInfo(usernameUrl, setUser, setLoading, setError));
    // dispatch(loadUserInfo(null, setUser, setLoading, setError));
  }, [dispatch, usernameUrl]);

  const passwordUpdateView = (
    <>
      <h2>Ažuriraj</h2>

      {passwordUpdate ? (
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
                  onMouseDown={(event) => {
                    event.preventDefault();
                  }}
                  edge="end"
                >
                  <VisibilityOff />
                </IconButton>
              </InputAdornment>
            }
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            label="Nova šifra"
          />
        </StyledFormControl>
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
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                edge="end"
              >
                <VisibilityOff />
              </IconButton>
            </InputAdornment>
          }
          onChange={(e) => setConfirmedPassword(e.target.value)}
          label="Potvrdi trenutnom šifrom"
        />
      </StyledFormControl>
      <StyledButton variant="outlined" onClick={handleSubmitPasswordUpdate}>
        Potvrdi
      </StyledButton>
    </>
  );

  const usernameUpdateView = (
    <>
      {usernameUpdate ? (
        <StyledTextField
          label="Novo korisničko ime"
          variant="outlined"
          onChange={(e) => setNewUsername(e.target.value)}
          value={newUsername}
        />
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
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                edge="end"
              >
                <VisibilityOff />
              </IconButton>
            </InputAdornment>
          }
          onChange={(e) => setConfirmedPassword(e.target.value)}
          label="Potvrdi trenutnom šifrom"
        />
      </StyledFormControl>
      <StyledButton variant="outlined" onClick={handleSubmitUsernameUpdate}>
        Potvrdi
      </StyledButton>
    </>
  );

  const userInfoView = error ? (
    <ErrorDialog error={error} setError={() => setError(null)} />
  ) : loading ? (
    <Loader />
  ) : (
    <>
      <h2>Informacije</h2>
      <StyledForm noValidate>
        <MyTextField value={user.email} label="Email" />
        <MyTextField
          value={user.username}
          label="Korisničko ime"
          editable
          clb={() => {
            setUsernameUpdate(true);
            setPasswordUpdate(false);
          }}
        />
        <MyTextField
          value="🔒"
          label="Šifra"
          editable
          clb={() => {
            setPasswordUpdate(true);
            setUsernameUpdate(false);
          }}
        />
      </StyledForm>
    </>
  );

  return usernameUrl === username ? (
    <Container>
      {userInfoView}
      {usernameUpdate ? usernameUpdateView : null}
      {passwordUpdate ? passwordUpdateView : null}
    </Container>
  ) : null;
};

export default UserInfo;
