import {
  setLoading as setLoadingPosts,
  setError as setErrorPosts,
  setPosts,
} from '../components/posts/redux/slices';
import {
  loadReportedPostsRepository,
  loadUserPostsRepository,
} from '../repository/posts';
import serialize from '../../../utils/serialize';
import { loadReportedCommentsRepository } from '../repository/comments';
import {
  setComments,
  setLoading as setLoadingComments,
  setError as setErrorComments,
} from '../components/reportedComments/redux/slices';

export const loadUserPosts =
  (username, order) => async (dispatch, getState) => {
    try {
      dispatch(setLoadingPosts(true));
      const posts = await loadUserPostsRepository(username, order);
      dispatch(setPosts(posts));
    } catch (err) {
      setErrorPosts(serialize(err));
    } finally {
      dispatch(setLoadingPosts(false));
    }
  };

export const loadReportedPosts = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingPosts(true));
    const posts = await loadReportedPostsRepository();
    dispatch(setPosts(posts));
  } catch (err) {
    setErrorPosts(serialize(err));
  } finally {
    dispatch(setLoadingPosts(false));
  }
};

export const loadReportedComments = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingComments(true));
    const comments = await loadReportedCommentsRepository();
    dispatch(setComments(comments));
  } catch (err) {
    setErrorComments(serialize(err));
  } finally {
    dispatch(setLoadingComments(false));
  }
};
