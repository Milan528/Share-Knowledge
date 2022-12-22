import {
  setError as setErrorUsersTable,
  setLoading as setLoadingUsersTable,
  setUsers,
} from '../components/usersTable/redux/slices';
import { loadUserAndLikesRepository } from '../repository/users';
import serialize from '../../../utils/serialize';

export const loadUserAndLikes = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingUsersTable(true));
    const usersAndLikes = await loadUserAndLikesRepository();
    dispatch(setUsers(usersAndLikes));
  } catch (err) {
    dispatch(setErrorUsersTable(serialize(err)));
  } finally {
    dispatch(setLoadingUsersTable(false));
  }
};
