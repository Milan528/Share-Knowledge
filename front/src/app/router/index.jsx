import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as routes from './routes';
import Home from '../../pages/home';
import CreatePost from '../../pages/createPost';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.homeRoute} element={<Home />} />
        <Route path={routes.createPost} element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}
