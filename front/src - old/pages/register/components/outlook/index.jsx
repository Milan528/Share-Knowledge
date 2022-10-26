import React from "react";
import classStyles from "./styles";
import Button from "@material-ui/core/Button";
import OutlookIcon from "../../../../assets/Outlook.png";

const Register = () => {
  const classes = classStyles();

  return (
    <Button size="large" className={classes.button}>
      <img
        alt=""
        src={OutlookIcon}
        height={30}
        width={20}
        className={classes.image}
      />
      Registruj me
    </Button>
  );
};

export default Register;
