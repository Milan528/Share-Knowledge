import React, { Fragment, useContext } from "react";
import DoubleArrow from "@material-ui/icons/DoubleArrow";
import classStyles from "./styles";
import Button from "@material-ui/core/Button";
// import { HOME_HIDE_LEFT_BAR } from "../../../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const LeftBar = (props) => {
  const home = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const { hideLeftBar } = home;

  const classes = classStyles(hideLeftBar);

  const onClick = () => {
    // dispatch({type: HOME_HIDE_LEFT_BAR, payload: !hideLeftBar})
  };

  return (
    <Fragment>
      <Button
        fullWidth
        className={classes.color}
        disableRipple
        onClick={onClick}
      >
        <DoubleArrow className={classes.iconStyle} />
      </Button>
    </Fragment>
  );
};

export default LeftBar;
