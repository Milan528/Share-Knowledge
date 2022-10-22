import React from "react";
import classStyles from "./styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { loginRoute } from "../../../../router/routes";

export const Login = (props) => {
  const classes = classStyles();
  const path = props.location.pathname;

  const handleClick = () => {
    props.history.push(loginRoute);
  };

  return path === loginRoute ? null : (
    <Button className={classes.color} onClick={handleClick}>
      <Typography variant="subtitle2">Prijavljivanje</Typography>
    </Button>
  );
};

export default withRouter(Login);
