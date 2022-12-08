import React from 'react';
import { homeRoute } from '../../../../app/router/routes';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../../../app/redux/slices';

const Authorized = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.app.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setToken(null));
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
