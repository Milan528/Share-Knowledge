import React from "react";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { withRouter } from "react-router-dom";
import { homeRoute } from "../../../../router/routes";
import image from "../../../../assets/Logo.jpg";

export const OglasnaTabla = (props) => {
  const classes = classStyles();
  const path = props.location.pathname;

  const handleClick = () => {
    if (path !== homeRoute) props.history.push(homeRoute);
  };

  return (
    <Button className={classes.color} onClick={handleClick}>
      <Typography variant="subtitle2">
        <img src={image} alt="Smiley face" height="45" width="45" />
      </Typography>
    </Button>
  );
};

export default withRouter(OglasnaTabla);
