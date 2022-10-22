import { getAllPostsRepository } from "../infrastructure/repository/posts";
import { loading, setPosts, setError } from "../redux/slices";

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
