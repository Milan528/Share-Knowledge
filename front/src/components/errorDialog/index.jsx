import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';

export default function ResponsiveDialog(props) {
  const { error, handleError } = props;
  const dispatch = useDispatch();

  function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

  const handleClose = () => {
    dispatch(handleError(null));
  };

  useEffect(() => {
    return () => {
      dispatch(handleError(null));
    };
  }, [dispatch, handleError]);

  if(isJsonString(error))
    console.log((JSON.parse(error)).stack) 
  else
    console.log(error) 

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent >
        <DialogContentText style={{whiteSpace: 'break-spaces'}}>
          {isJsonString(error) ? `${(JSON.parse(error)).message}\nFor more details open developer tools.` : error.toString()}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Zatvori
        </Button>
      </DialogActions>
    </Dialog>
  );
}
