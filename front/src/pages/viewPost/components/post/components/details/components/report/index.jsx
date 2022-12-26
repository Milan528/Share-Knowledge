import { CircularProgress, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reportPost } from '../../../../../../reduxThunk/actions';
import { StyledReportIconButton } from './styles';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AlertDialog from '../../../../../../../../components/alertDialog';

export const Report = ({ postId, postedBy }) => {
  const dispatch = useDispatch();
  const [errorPostReporting, setErrorPostReporting] = useState(null);
  const [loadingPostReporting, setLoadingPostReporting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const viewToRender = (
    <>
      {loadingPostReporting ? <CircularProgress /> : null}
      {errorPostReporting ? 'Prijavljivanje neuspesno' : null}
      <Tooltip title="Prijavi objavu">
        <StyledReportIconButton
          onClick={() => setDialogOpen(true)}
          disabled={loadingPostReporting}
          color="primary"
        >
          <PriorityHighIcon />
        </StyledReportIconButton>
      </Tooltip>
      <AlertDialog
        title="Prijavi objavu"
        description={`Prijavljena objava će biti pregledana. Ukoliko objava 
        sadrži neprikladan sadržaj biće ukolnjena sa platforme. `}
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={() =>
          dispatch(
            reportPost(
              postId,
              postedBy,
              setLoadingPostReporting,
              setErrorPostReporting
            )
          )
        }
      />
    </>
  );

  return viewToRender;
};

export default Report;
