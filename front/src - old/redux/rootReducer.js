import { combineReducers } from "redux"
import { appReducer } from "./app/slices";
import {homeReducer} from "../pages/home/redux/slices";
import {loginReducer} from "../pages/login/redux/slices";
import {registerReducer} from "../pages/register/redux/slices";
import {createPostReducer} from "../pages/createPost/redux/slices";
import {postReducer} from "../pages/post/redux/slices";
import {rolesReducer} from "../pages/roles/redux/slices";
import {tagsReducer} from "../pages/tags/redux/slices";

const allReducers = combineReducers({
    app: appReducer,
    home: homeReducer,
    login: loginReducer,
    register: registerReducer,
    createPost: createPostReducer,
    post: postReducer,
    roles: rolesReducer,
    tags: tagsReducer
})

export default allReducers   