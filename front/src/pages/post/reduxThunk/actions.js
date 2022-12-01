import { setLoading, setError, setComments } from '../redux/slices';
import serialize from '../../../components/serialize';
import {
  getCommentsRepository,
  addCommentRepository,
} from '../repository/comments';

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

export const addComment =
  (setError, setloading, comment) => async (dispatch, getState) => {
    try {
      // dispatch(setLoading(true));
      setloading(true);
      const res = await addCommentRepository(comment);
      //add files for comment
      // dispatch(setComments(comments));
    } catch (err) {
      setError(err);
      // dispatch(setError(serialize(err)));
    } finally {
      setloading(false);
      // dispatch(setLoading(false));
    }
  };
