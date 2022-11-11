import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import * as routes from './routes';

const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to={routes.loginRoute} />;
};

export default PrivateRoutes;
