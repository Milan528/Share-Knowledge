import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";

export default function ResponsiveDialog(props) {
  const { error, handleError } = props;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handleError(null));
  };

  useEffect(() => {
    return () => {
      dispatch(handleError(null));
    };
  }, [dispatch, handleError]);

  return (
    <Dialog fullScreen={false} open={true} onClose={handleClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <DialogContentText>{error}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Zatvori
        </Button>
      </DialogActions>
    </Dialog>
  );
}
