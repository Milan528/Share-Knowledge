import { getAllPostsRepository } from '../infrastructure/repository/posts';
import { getAllTagsRepository } from '../infrastructure/repository/tags';
import { setAllTags } from '../components/filters/components/tags/redux/slices';
import {
  setPosts,
  setLoading as loadingPosts,
  setError as setErrorPosts,
} from '../components/posts/redux/slices';

export const loadPosts = () => async (dispatch, getState) => {
  try {
    dispatch(loadingPosts(true));
    const posts = await getAllPostsRepository();
    dispatch(setPosts(posts));
  } catch (err) {
    dispatch(
      setErrorPosts(JSON.stringify(err, Object.getOwnPropertyNames(err)))
    );
  } finally {
    dispatch(loadingPosts(false));
  }
};

export const loadTags = () => async (dispatch, getState) => {
  try {
    // dispatch(loading(true));
    const tags = await getAllTagsRepository();
    dispatch(setAllTags(tags));
  } catch (err) {
    // dispatch(setError(JSON.stringify(err, Object.getOwnPropertyNames(err))));
  } finally {
    // dispatch(loading(false));
  }
};
