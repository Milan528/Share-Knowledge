import React, { useState } from "react";
import classStyles from "./styles";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { deletePost as deletePostActon } from "../../../../../reduxThunk/actions";
import { homeRoute } from "../../../../../../../router/routes";
import { useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Post = (props) => {
  const classes = classStyles();
  const { postId } = props;
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContet, setDialogContent] = useState("");
  const dispatch = useDispatch();

  const onClick = () => {
    setDialogTitle("Brisanje objave");
    setDialogContent("Da li ste sigurni da želite da obrišete objavu?");
    setDeleteDialog(true);
  };
  const handleClose = () => {
    setDeleteDialog(false);
  };

  const handleSubmit = () => {
    const deleted = dispatch(deletePostActon(postId));
    if (deleted) {
      props.history.push(homeRoute);
    }
  };

  return (
    <>
      <Button onClick={onClick}>
        <DeleteIcon className={classes.date} />
      </Button>
      <Dialog
        fullScreen={false}
        open={deleteDialog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContet}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Zatvori
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Potvrdi
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default withRouter(Post);
