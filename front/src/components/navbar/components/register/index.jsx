import React from "react";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { withRouter } from "react-router-dom";
import { registerRoute } from "../../../../router/routes";

export const Register = (props) => {
  const classes = classStyles();
  const path = props.location.pathname;

  const handleClick = () => {
    props.history.push(registerRoute);
  };

  return path === registerRoute ? null : (
    <Button className={classes.color} onClick={handleClick}>
      <Typography variant="subtitle2">Registracija</Typography>
    </Button>
  );
};

export default withRouter(Register);
