import { homeReducer } from '../../pages/home/redux/slices';
import { createPostReducer } from '../../pages/createPost/redux/slices';
import { appReducer } from '../redux/slices';

const rootReducer = {
  app: appReducer,
  home: homeReducer,
  createPost: createPostReducer,
};

export default rootReducer;
