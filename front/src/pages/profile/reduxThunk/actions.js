import { setToken, setRole } from '../../../app/redux/slices';
import { setError, setLoading } from '../redux/slices';
import { loginUserRepository } from '../repository/auth';
import serialize from '../../../components/serialize';

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
    setError(serialize(err));
  } finally {
    dispatch(setLoading(false));
  }
};

export const loadPostsForSpecificUser =
  (userId) => async (dispatch, getState) => {
    const DTO = {
      userId,
    };

    try {
      console.log('Loading posts for specific user');
      // dispatch(setLoading(true));
      // const user = await loginUserRepository(DTO);
      // dispatch(setToken(user.token));
      // dispatch(setRole(user.role));
    } catch (err) {
      // setError(serialize(err));
    } finally {
      // dispatch(setLoading(false));
    }
  };
