import React from "react";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { withRouter } from "react-router-dom";
import { rolesRoute } from "../../../../router/routes";

export const Login = (props) => {
  const classes = classStyles();
  const path = props.location.pathname;

  const handleClick = () => {
    props.history.push(rolesRoute);
  };

  return path === rolesRoute ? null : (
    <Button className={classes.color} onClick={handleClick}>
      <Typography variant="subtitle2">Privilegije</Typography>
    </Button>
  );
};

export default withRouter(Login);
