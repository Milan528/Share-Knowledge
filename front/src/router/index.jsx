import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as routes from './routes';
import Home from '../pages/home'

export default function Router() {
    return(
       <BrowserRouter>
        <Routes>
            <Route path={routes.homeRoute} element={<Home/>}/>
        </Routes>
       </BrowserRouter>
    )
}