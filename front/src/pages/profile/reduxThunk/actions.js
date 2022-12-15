import {
  setLoading,
  setError,
  setPosts,
} from '../components/posts/redux/slices';
import { loadUserPostsRepository } from '../repository/posts';
import serialize from '../../../utils/serialize';

export const loadUserPosts =
  (username, order) => async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const posts = await loadUserPostsRepository(username, order);
      dispatch(setPosts(posts));
    } catch (err) {
      setError(serialize(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
