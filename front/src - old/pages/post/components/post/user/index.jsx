import React from "react";
import Typography from "@material-ui/core/Typography";
import classStyles from "./styles";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import Account from "../../../../../assets/Account.jpg";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Spacer from "../../../../../components/spacer";
import HelpIcon from "@material-ui/icons/Help";
import Book from "@material-ui/icons/MenuBook";

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
