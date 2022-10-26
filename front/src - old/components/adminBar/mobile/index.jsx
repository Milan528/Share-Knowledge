import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import { HOME_HIDE_LEFT_BAR } from "../../../store/actions";
import classStyles from "./styles";
import Year from "../components/year";
import Department from "../components/department";
import Logo from "../../../../../components/navbar/components/blog/index";
import Divider from "@material-ui/core/Divider";
import { useSelector, useDispatch } from "react-redux";

export default function TemporaryDrawer() {
  const classes = classStyles();

  const home = useSelector((state) => state.home);
  const { hideLeftBar } = home;

  const screen = useSelector((state) => state.screen);
  const { screenWidth } = screen;
  const dispatch = useDispatch();

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch({ type: HOME_HIDE_LEFT_BAR, payload: !hideLeftBar });
  };

  return screenWidth > 650 ? null : (
    <Drawer
      open={!hideLeftBar}
      onClose={toggleDrawer}
      classes={{ paper: classes.drawer }}
    >
      <Logo />
      <Divider className={classes.deviderColor} />
      <Year />
      <Department />
    </Drawer>
  );
}
