import React from 'react';
import { loginRoute, registerRoute } from '../../../../app/router/routes';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Unauthorized = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.app.token);

  return !token ? (
    <ul>
      <li>
        <div onClick={() => navigate(registerRoute)}>Registracija</div>
      </li>
      <li>
        <div onClick={() => navigate(loginRoute)}>Prijava</div>
      </li>
    </ul>
  ) : null;
};

export default Unauthorized;
