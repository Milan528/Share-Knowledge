import { homeReducer } from "../pages/home/redux/slices";
import { appReducer } from "./app/slices";

const rootReducer = {
  app: appReducer,
  home: homeReducer,
};

export default rootReducer;
