import React, { useState, useEffect } from "react";
import classStyles, { styles } from "./styles";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { homeRoute } from "../../../../router/routes";
import { useSelector, useDispatch } from "react-redux";
import { changeRole } from "../../reduxThunk/actions";

const Controlls = (props) => {
  const classes = classStyles();
  const roles = useSelector((state) => state.roles);
  const { username, role } = roles;
  const dispatch = useDispatch();
  const [button, disableButton] = useState(true);

  const submit = () => {
    const success = dispatch(changeRole(username, role));
    if (success) {
      props.history.push(homeRoute);
    }
  };

  const cancel = () => {
    props.history.push(homeRoute);
  };

  useEffect(() => {
    if (username === null) {
      disableButton(true);
    } else {
      disableButton(false);
    }
  }, [username]);

  return (
    <div className={classes.container}>
      <Button
        disabled={button}
        onClick={submit}
        className={classes.submit}
        style={styles.buttonColor(button)}
      >
        <Typography
          variant="button"
          color="inherit"
          className={classes.fontStyle}
        >
          Potvrdi
        </Typography>
      </Button>
      <Button onClick={cancel} className={classes.cancel}>
        <Typography
          variant="button"
          color="inherit"
          className={classes.fontStyle}
        >
          Odustani
        </Typography>
      </Button>
    </div>
  );
};

export default withRouter(Controlls);
