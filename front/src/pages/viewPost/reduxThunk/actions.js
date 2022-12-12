import {
  setComments,
  setLoading as setLoadingComment,
  setError as setErrorComment,
} from '../components/comments/redux/slices';
import {
  setPost,
  setLoading as setLoadingPost,
  setError as setErrorPost,
} from '../components/post/redux/slices';
import serialize from '../../../utils/serialize';
import {
  getCommentsRepository,
  addCommentRepository,
} from '../repository/comments';
import {
  getPostRepository,
  getSpecificPostRepository,
} from '../repository/post';

export const loadComments = (postId) => async (dispatch, getState) => {
  try {
    dispatch(setLoadingComment(true));
    const comments = await getCommentsRepository(postId);
    dispatch(setComments(comments));
  } catch (err) {
    dispatch(setErrorComment(serialize(err)));
  } finally {
    dispatch(setLoadingComment(false));
  }
};

export const loadPost = (postId) => async (dispatch, getState) => {
  //used when viewing post from url (exp. sending post url to someone), not from homepage
  try {
    dispatch(setLoadingPost(true));
    const post = await getPostRepository(postId);
    dispatch(setPost(post));
  } catch (err) {
    dispatch(setErrorPost(serialize(err)));
  } finally {
    dispatch(setLoadingPost(false));
  }
};

export const addComment =
  (setError, setLoading, comment, postID, setUploadProgress) =>
  async (dispatch, getState) => {
    try {
      setLoading(true);

      await addCommentRepository(comment, setUploadProgress);
      dispatch(loadComments(postID));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const loadSpecificPost =
  (selectedPostIndex, homepageFilters, clb) => async (dispatch, getState) => {
    const { selectedTags, type, search, order } = homepageFilters;

    let dto = {
      tags: selectedTags.map((tag) => tag.id),
      startIndex: selectedPostIndex, // redni_broj_strane===redni_broj_posta, kada je broj postova po strani===1
      count: 1, //1 post po stranici
      search,
      type,
      order,
    };

    try {
      dispatch(setLoadingPost(true));
      const { post } = await getSpecificPostRepository(dto);
      dispatch(setPost(post));
      clb(post.id);
    } catch (err) {
      dispatch(setErrorPost(serialize(err)));
    } finally {
      dispatch(setLoadingPost(false));
    }
  };
