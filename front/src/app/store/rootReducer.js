import { loginReducer } from '../../pages/login/redux/slices';
import { registerReducer } from '../../pages/register/redux/slices';
import { homeReducer } from '../../pages/home/redux/slices';
import { createPostReducer } from '../../pages/createPost/redux/slices';
import { appReducer } from '../redux/slices';

const rootReducer = {
  app: appReducer,
  home: homeReducer,
  createPost: createPostReducer,
  login: loginReducer,
  register: registerReducer,
};

export default rootReducer;
