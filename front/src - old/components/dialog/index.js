import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function ResponsiveDialog(props) {
  const { message, clearMessage } = props;
  useEffect(() => {
    return () => {
      clearMessage("");
    };
  }, [clearMessage]);

  const onClose = () => {
    clearMessage("");
  };

  return (
    <Dialog fullScreen={false} open={message !== ""} onClose={onClose}>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Zatvori
        </Button>
      </DialogActions>
    </Dialog>
  );
}
