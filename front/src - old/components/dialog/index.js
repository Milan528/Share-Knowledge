import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function ResponsiveDialog(props) {
  const { message, clearMessage } = props;
  useEffect(() => {
    return () => {
      clearMessage('');
    };
  }, [clearMessage]);

  const onClose = () => {
    clearMessage('');
  };

  return (
    <Dialog fullScreen={false} open={message !== ''} onClose={onClose}>
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
