import React from "react";
import Typography from "@mui/material/Typography";
import classStyles from "./styles";
import { withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import Account from "../../../../../assets/Account.jpg";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

const Owner = (props) => {
  const classes = classStyles();

  return (
    <div className={classes.controlls}>
      <Button className={classes.button} disableRipple>
        <Avatar alt="Smiley face" src={Account} />
      </Button>
      <Typography>
        <Link
          href="#"
          onClick={(event) => event.preventDefault()}
          color="inherit"
        >
          Pera Perić
        </Link>
      </Typography>
    </div>
  );
};

export default withRouter(Owner);
