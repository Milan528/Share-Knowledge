import React from "react";
import classStyles from "./styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { tagsRoute } from "../../../../router/routes";

export const Login = (props) => {
  const classes = classStyles();
  const path = props.location.pathname;

  const handleClick = () => {
    props.history.push(tagsRoute);
  };

  return path === tagsRoute ? null : (
    <Button className={classes.color} onClick={handleClick}>
      <Typography variant="subtitle2">Tagovi</Typography>
    </Button>
  );
};

export default withRouter(Login);
