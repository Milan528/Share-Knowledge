import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from "../pages/home"
import Login from "../pages/login";
import Register from "../pages/register";
import CreatePost from "../pages/createPost";
import Post from "../pages/post";
import Roles from "../pages/roles";
import Tags from "../pages/tags"

import * as routes from "./routes";

const Router = () => {
    
    return(
        <BrowserRouter>
            <Route exact path={routes.homeRoute} render={() => <Home /> }/> 
            <Route path={routes.loginRoute} render={()=><Login />}/>  
            <Route path={routes.registerRoute} render={()=><Register />}/> 
            <Route path={routes.createPostRoute} render={()=><CreatePost />}/> 
            <Route path={routes.postRoute} render={()=><Post />}/>
            <Route path={routes.rolesRoute} render={()=><Roles />}/> 
            <Route path={routes.tagsRoute} render={()=><Tags />}/> 
        </BrowserRouter>
    )
}

export default Router