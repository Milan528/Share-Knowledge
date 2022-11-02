import React from "react";
import classStyles from "./styles";
import Typography from "@mui/material/Typography";

const ControllsHeading = () => {
  const classes = classStyles();

  return (
    <Typography variant="h5" className={classes.text}>
      Tvoj odgovor
    </Typography>
  );
};

export default ControllsHeading;
