import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserAndLikes } from '../../reduxThunk/actions';
import Loader from '../../../../components/loader';
import ErrorDialog from '../../../../components/errorDialog';
import { setError } from './redux/slices';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { profileRoute } from '../../../../app/router/routes';

export const UsersTable = () => {
  const { error, loading, users } = useSelector(
    (state) => state.users.usersTable
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const username = useSelector((state) => state.app.username);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUserAndLikes());
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (users.length > 0) {
      const myRating = users.findIndex((user) => user.username === username);
      setPage(Math.floor(myRating / rowsPerPage));
    }
  }, [users, rowsPerPage, username]);

  const handleVisitUserProfile = (username) => {
    navigate({
      pathname: profileRoute,
      search: `username=${username}`,
    });
  };

  const viewToRender = (
    <Paper sx={{ width: '70%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Redni broj</TableCell>
              <TableCell>Korisnik</TableCell>
              <TableCell>Lajkovi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={JSON.stringify(user)}
                  >
                    <TableCell>
                      {users.findIndex(
                        (someUser) => someUser.username === user.username
                      ) + 1}
                    </TableCell>
                    {/* <TableCell>{user.username}</TableCell> */}
                    <TableCell align="left">
                      <Button
                        onClick={() => handleVisitUserProfile(user.username)}
                      >
                        <AccountCircleIcon />
                        {user.username}
                      </Button>
                    </TableCell>

                    <TableCell>{user.likes}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    viewToRender
  );
};

export default UsersTable;
