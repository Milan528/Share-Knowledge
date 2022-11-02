import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import classStyles from "./styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { withRouter } from "react-router-dom";
import { createPostRoute } from "../../../../router/routes";
import Dialog from "../../../../components/dialog";
import { useSelector } from "react-redux";

const Controll = (props) => {
  const classes = classStyles();
  const app = useSelector((state) => state.app);
  const { loggedIn } = app;

  const [dialogContet, setDialogContent] = useState("");

  const onClick = () => {
    if (loggedIn === false) {
      setDialogContent("Da bi ste kreirali objavu prvo se prijavite.");
    } else {
      props.history.push(createPostRoute);
    }
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <Typography variant="h6" color="inherit" className={classes.fontType}>
          Imaš pitanje ili materijal?
        </Typography>
        <Button onClick={onClick} className={classes.button}>
          <Typography
            variant="button"
            color="inherit"
            className={classes.fontStyle}
          >
            Kreiraj objavu
          </Typography>
        </Button>
      </div>
      <Divider className={classes.divider} />
      <Dialog message={dialogContet} clearMessage={setDialogContent} />
    </Fragment>
  );
};

export default withRouter(Controll);
