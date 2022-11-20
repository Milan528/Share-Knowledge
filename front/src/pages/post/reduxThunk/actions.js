import { setLoading, setError, setFiles } from '../redux/slices';
import serialize from '../../../components/serialize';

export const loadSomethingBeautiful =
  (filesMeta) => async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
    } catch (err) {
      dispatch(setError(serialize(err)));
    } finally {
      dispatch(setLoading(false));
    }
  };
