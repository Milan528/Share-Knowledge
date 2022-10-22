import React from "react";
import classStyles from "./styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { mailsRoute } from "../../../../router/routes";

export const Login = (props) => {
  const classes = classStyles();
  const path = props.location.pathname;

  const handleClick = () => {
    props.history.push(mailsRoute);
  };

  return path === mailsRoute ? null : (
    <Button className={classes.color} onClick={handleClick}>
      <Typography variant="subtitle2">Obavesti članove</Typography>
    </Button>
  );
};

export default withRouter(Login);
