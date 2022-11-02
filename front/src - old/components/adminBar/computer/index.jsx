import React, { useContext, useState } from "react";
import classStyles from "./styles";
import Slider from "../components/slider";
import Year from "../components/year";
import Department from "../components/department";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";

const LeftBar = () => {
  const screen = useSelector((state) => state.screen);
  const home = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(false);

  const { screenWidth } = screen;
  // const { hideLeftBar } = home;

  const classes = classStyles(hidden);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return screenWidth <= 650 ? null : (
    <div className={classes.filtersContainer}>
      <div className={classes.slide}>
        <Slider />
        <Divider className={classes.deviderColor} />
        <Year />
        <Department />
        <button onClick={handleClick}>pomeri</button>
      </div>
    </div>
  );
};

export default LeftBar;
