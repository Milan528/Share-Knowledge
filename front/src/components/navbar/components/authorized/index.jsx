import React from 'react';
import { homeRoute } from '../../../../app/router/routes';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Authorized = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.app.token);

  const handleLogout = () => {
    localStorage.clear();
    navigate(homeRoute);
    navigate(0);
  };

  return token ? (
    <ul>
      <li>
        <div onClick={() => console.log('profil...')}>Profil</div>
      </li>
      <li>
        <div onClick={handleLogout}>Odjavi se</div>
      </li>
    </ul>
  ) : null;
};

export default Authorized;
