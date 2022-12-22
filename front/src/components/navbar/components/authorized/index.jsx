import React from 'react';
import { profileRoute } from '../../../../app/router/routes';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setRole, setUsername } from '../../../../app/redux/slices';
import { initialState } from '../../../../app/redux/state';

const Authorized = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.app.token);
  const username = useSelector((state) => state.app.username);
  const dispatch = useDispatch();

  const handleProfile = () => {
    navigate({
      pathname: profileRoute,
      search: `username=${username}`,
    });
  };

  const handleLogout = () => {
    dispatch(setToken(initialState.token));
    dispatch(setRole(initialState.role));
    dispatch(setUsername(initialState.username));
  };

  return token ? (
    <ul>
      <li>
        <div onClick={handleProfile}>Profil</div>
      </li>
      <li>
        <div onClick={handleLogout}>Odjavi se</div>
      </li>
    </ul>
  ) : null;
};

export default Authorized;
