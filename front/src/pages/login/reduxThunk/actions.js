import { setToken, setRole } from '../../../app/redux/slices';
import { setError, setLoading } from '../redux/slices';
import { loginUserRepository } from '../infrastructure/repository/auth';

export const login = (email, password) => async (dispatch, getState) => {
  const DTO = {
    email,
    password,
  };

  try {
    dispatch(setLoading(true));
    const user = await loginUserRepository(DTO);
    dispatch(setToken(user.token));
    dispatch(setRole(user.role));
  } catch (err) {
    setError(JSON.stringify(err, Object.getOwnPropertyNames(err)));
  } finally {
    dispatch(setLoading(false));
  }
};
