import { getAllPostsRepository } from '../infrastructure/repository/posts';
import { getAllTagsRepository } from '../infrastructure/repository/tags';
import { loading, setPosts, setError, setAllTags } from '../redux/slices';

export const loadPage = () => async (dispatch, getState) => {
  try {
    dispatch(loading(true));
    const posts = await getAllPostsRepository();
    dispatch(setPosts(posts));
  } catch (err) {
    dispatch(setError(JSON.stringify(err, Object.getOwnPropertyNames(err))));
  } finally {
    dispatch(loading(false));
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
