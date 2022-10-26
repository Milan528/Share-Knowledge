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
        Znanje se povećava kada se deli, ne kada se čuva. - Kamari aka Lyrikal
      </Typography>
    </div>
  );
};

export default Login;
