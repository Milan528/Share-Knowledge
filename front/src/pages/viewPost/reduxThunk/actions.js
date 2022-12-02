import { setLoading, setError, setComments } from '../redux/slices';
import serialize from '../../../utils/serialize';
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
  (setError, setLoading, comment) => async (dispatch, getState) => {
    try {
      setLoading(true);
      const commentId = await addCommentRepository(comment);

      //add files for comment
    } catch (err) {
      setError(err);
    } finally {
      setLoading(true);
    }
  };
