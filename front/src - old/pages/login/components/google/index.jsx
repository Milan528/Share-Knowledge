import React from "react";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import GoogleIcon from "../../../../assets/Google.png";

const Register = () => {
  const classes = classStyles();

  return (
    <Button size="large" className={classes.button}>
      <img
        alt=""
        src={GoogleIcon}
        height={30}
        width={20}
        className={classes.image}
      />
      Prijavi me
    </Button>
  );
};

export default Register;

// Deljenje znanja predstavlja osnovni čin prijateljstva. Zato što je to način da nešto date, bez da bilo šta izgubite. - Richard Stallman
