import React from 'react';
import { profileRoute, tagsRoute, usersRoute } from '../../../../app/router/routes';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../../../app/redux/slices';

const Authorized = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.app.token);
  const username = useSelector((state) => state.app.username);
  const dispatch = useDispatch();

  const handleProfile = () => {
    navigate(
      {
        pathname: profileRoute,
        search: `username=${username}`,
      },
    )
  }

  const handleLogout = () => {
    dispatch(setToken(null));
  };

  return token ? (
    <ul>
      <li>
        <div onClick={() => navigate(usersRoute)}>Korisnici</div>
      </li>
      <li>
        <div onClick={() => navigate(tagsRoute)}>Tagovi</div>
      </li>
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
