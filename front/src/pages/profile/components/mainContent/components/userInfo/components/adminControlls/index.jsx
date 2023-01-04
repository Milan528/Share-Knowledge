import { Button } from '@mui/material';
import React from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AdminControllsContainer, StyledDeleteForeverButton } from './styles';
import { useState } from 'react';
import AlertDialog from '../../../../../../../../components/alertDialog';

const AdminControlls = ({ user }) => {
  const [deleteForeverDialogOpen, setDeleteForeverDialogOpen] = useState(false);
  const [banDialogOpen, setBanDialogOpen] = useState(false);

  const handleDeleteForever = () => {};
  const handleBan = () => {};

  return (
    <>
      <AdminControllsContainer>
        {user?.banned === true ? (
          <Button
            color="success"
            variant="contained"
            endIcon={<LockOpenIcon />}
            onClick={() => setBanDialogOpen(true)}
          >
            Odblokiraj profil
          </Button>
        ) : (
          <Button
            color="error"
            variant="contained"
            endIcon={<LockPersonIcon />}
            onClick={() => setBanDialogOpen(true)}
          >
            Blokiraj profil
          </Button>
        )}
        <StyledDeleteForeverButton
          color="error"
          variant="contained"
          endIcon={<DeleteForeverIcon />}
          onClick={() => setDeleteForeverDialogOpen(true)}
        >
          Ugasi profil
        </StyledDeleteForeverButton>
      </AdminControllsContainer>
      <AlertDialog
        title="Obriši profil"
        description={`Brisanje profila će ukloniti sav sadržaj korisnika sa sajta i sprečiti njegovo ponovno registrovanje ovim email-om. `}
        open={deleteForeverDialogOpen}
        setOpen={setDeleteForeverDialogOpen}
        handleSubmit={() => handleDeleteForever}
      />
      <AlertDialog
        title={user.banned ? 'Odblokiraj profil' : 'Blokiraj profil'}
        description={
          user.banned
            ? 'Da li ste sigurni da želite da pustite korisnika iz kaveza?'
            : 'Back to the sell'
        }
        open={banDialogOpen}
        setOpen={setBanDialogOpen}
        handleSubmit={() => handleBan}
      />
    </>
  );
};

export default AdminControlls;
