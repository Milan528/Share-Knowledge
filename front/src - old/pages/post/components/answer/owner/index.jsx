import React from "react";
import Typography from "@material-ui/core/Typography";
import classStyles from "./styles";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Account from "../../../../../assets/Account.jpg";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

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
