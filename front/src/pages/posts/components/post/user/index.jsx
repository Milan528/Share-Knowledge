import React from "react";
import Typography from "@mui/material/Typography";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import { withRouter } from "react-router-dom";
import Account from "../../../../../assets/Account.jpg";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Spacer from "../../../../../components/spacer";
import HelpIcon from "@mui/icons-material/Help";
import Book from "@mui/icons-material/MenuBook";

const Post = (props) => {
  const classes = classStyles();
  const { type } = props;

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
      <Spacer />
      {type === "q" ? (
        <HelpIcon className={classes.postType} />
      ) : (
        <Book className={classes.postType} />
      )}
    </div>
  );
};

export default withRouter(Post);
