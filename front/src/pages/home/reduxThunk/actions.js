import { getAllPostsRepository } from "../infrastructure/repository/posts";
import { loading, setPosts } from "../redux/slices";

export const loadPage = () => async (dispatch, getState) => {
  dispatch(loading(true));
  const { postsMap } = await getAllPostsRepository();
  // dispatch(setPosts(postsMap));
  dispatch(loading(false));
};
