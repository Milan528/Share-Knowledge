import React from "react";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
