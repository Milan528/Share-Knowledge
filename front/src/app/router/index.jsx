import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as routes from './routes';
import Home from '../../pages/home';
import CreatePost from '../../pages/createPost';
import Login from "../../pages/login";
import Register from "../../pages/register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.homeRoute} element={<Home />} />
        <Route path={routes.createPost} element={<CreatePost />} />
        <Route path={routes.loginRoute} element={<Login />} />
        <Route path={routes.registerRoute} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
