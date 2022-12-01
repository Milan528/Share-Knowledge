import { setLoading, setError, setComments } from '../redux/slices';
import serialize from '../../../components/serialize';
import { getCommentsRepository } from '../repository/comments';

export const loadComments = (postId) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const comments = await getCommentsRepository(postId);
    dispatch(setComments(comments));
  } catch (err) {
    dispatch(setError(serialize(err)));
  } finally {
    dispatch(setLoading(false));
  }
};
