import React from "react";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import classStyles from "./styles";

const Login = () => {
  const classes = classStyles();

  return (
    <div className={classes.container}>
      <FormatQuoteIcon fontSize="large" />
      <Typography variant="h5" className={classes.text} display="inline">
        Deljenje znanja predstavlja osnovu prijateljstva, jer je to način da se
        nešto da bez da se bilo šta izgubi. - Richard Stallman
      </Typography>
    </div>
  );
};

export default Login;
