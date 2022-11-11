import { setToken, setRole } from '../../../app/redux/slices';
import { setError, setLoading } from '../redux/slices';
import { registerUserRepository } from '../infrastructure/repository/auth';

export const register = (email, password) => async (dispatch, getState) => {
  const DTO = {
    email,
    password,
  };

  try {
    dispatch(setLoading(true));
    const user = await registerUserRepository(DTO);
    dispatch(setToken(user.token));
    dispatch(setRole(user.role));
  } catch (err) {
    setError(JSON.stringify(err, Object.getOwnPropertyNames(err)));
  } finally {
    dispatch(setLoading(false));
  }
};
