import React from "react";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import { withRouter } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { homeRoute } from "../../../../../../router/routes";

const Controlls = (props) => {
  const classes = classStyles();

  return (
    <div className={classes.container}>
      <Button
        // onClick={() => props.history.push(askQuestionRoute)}
        className={classes.submit}
      >
        <Typography
          variant="button"
          color="inherit"
          className={classes.fontStyle}
        >
          Odgovori
        </Typography>
      </Button>
      <Button
        className={classes.cancel}
        onClick={() => props.history.push(homeRoute)}
      >
        <Typography
          variant="button"
          color="inherit"
          className={classes.fontStyle}
        >
          Nazad
        </Typography>
      </Button>
    </div>
  );
};

export default withRouter(Controlls);
