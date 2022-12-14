import { CircularProgress, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledReportIconButton } from './styles';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { reportComment } from '../../../../../../../reduxThunk/actions';
import AlertDialog from '../../../../../../../../../components/alertDialog';

export const Report = ({ commentId, postedBy }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const viewToRender = (
    <>
      {loading ? <CircularProgress /> : null}
      {error ? 'Prijavljivanje neuspesno' : null}
      <Tooltip title="Prijavi komentar">
        <StyledReportIconButton
          onClick={() => setDialogOpen(true)}
          disabled={loading}
          color="primary"
        >
          <PriorityHighIcon />
        </StyledReportIconButton>
      </Tooltip>
      <AlertDialog
        title="Prijavi komentar"
        description={`Prijavljeni komentar će biti pregledan. Ukoliko komentar 
        sadrži neprikladan sadržaj biće ukolnjen sa platforme. `}
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={() =>
          dispatch(reportComment(commentId, postedBy, setLoading, setError))
        }
      />
    </>
  );

  return viewToRender;
};

export default Report;
