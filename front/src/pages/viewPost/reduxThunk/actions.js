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
  addCommentLikeRepository,
  removeCommentLikeRepository,
  addCommentDislikeRepository,
  removeCommentDislikeRepository,
} from '../repository/comments';
import {
  addPostDislikeRepository,
  addPostLikeRepository,
  getPostRepository,
  loadPostForHomepageFiltersRepository,
  removePostDislikeRepository,
  removePostLikeRepository,
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
  //used when sending post url to someone (no homape filters)
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

export const loadPostForHomepageFilters =
  //used when coming from homepage (there are homepage fitlers)
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
      const { post } = await loadPostForHomepageFiltersRepository(dto);
      dispatch(setPost(post));
      clb(post.id);
    } catch (err) {
      dispatch(setErrorPost(serialize(err)));
    } finally {
      dispatch(setLoadingPost(false));
    }
  };

export const addPostLike =
  (postID, setError, setLoading, setLikeDislikeStatus, setLikes) =>
  async (dispatch, getState) => {
    const {
      app: { token },
    } = getState();

    const DTO = {
      token,
      postID,
    };

    try {
      setLoading(true);
      const status = await addPostLikeRepository(DTO);
      setLikeDislikeStatus(status);
      setLikes((prev) => Number(prev) + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const removePostLike =
  (postID, setError, setLoading, setLikeDislikeStatus, setLikes, clb) =>
  async (dispatch, getState) => {
    const {
      app: { token },
    } = getState();

    const DTO = {
      token,
      postID,
    };

    try {
      setLoading(true);
      const status = await removePostLikeRepository(DTO);
      setLikeDislikeStatus(status);
      setLikes((prev) => Number(prev) - 1);
      if (clb) clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const addPostDislike =
  (postID, setError, setLoading, setLikeDislikeStatus, setDislikes) =>
  async (dispatch, getState) => {
    const {
      app: { token },
    } = getState();

    const DTO = {
      token,
      postID,
    };

    try {
      setLoading(true);
      const status = await addPostDislikeRepository(DTO);
      setLikeDislikeStatus(status);
      setDislikes((prev) => Number(prev) + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const removePostDislike =
  (postID, setError, setLoading, setLikeDislikeStatus, setDislikes, clb) =>
  async (dispatch, getState) => {
    const {
      app: { token },
    } = getState();

    const DTO = {
      token,
      postID,
    };

    try {
      setLoading(true);
      const status = await removePostDislikeRepository(DTO);
      setLikeDislikeStatus(status);
      setDislikes((prev) => Number(prev) - 1);
      if (clb) clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const addCommentLike =
  (commentID, setError, setLoading, setLikeDislikeStatus, setLikes) =>
  async (dispatch, getState) => {
    const {
      app: { token },
    } = getState();

    const DTO = {
      token,
      commentID,
    };

    try {
      setLoading(true);
      const status = await addCommentLikeRepository(DTO);
      setLikeDislikeStatus(status);
      setLikes((prev) => Number(prev) + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const removeCommentLike =
  (commentID, setError, setLoading, setLikeDislikeStatus, setLikes, clb) =>
  async (dispatch, getState) => {
    const {
      app: { token },
    } = getState();

    const DTO = {
      token,
      commentID,
    };

    try {
      setLoading(true);
      const status = await removeCommentLikeRepository(DTO);
      setLikeDislikeStatus(status);
      setLikes((prev) => Number(prev) - 1);
      if (clb) clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const addCommentDislike =
  (commentID, setError, setLoading, setLikeDislikeStatus, setDislikes) =>
  async (dispatch, getState) => {
    const {
      app: { token },
    } = getState();

    const DTO = {
      token,
      commentID,
    };

    try {
      setLoading(true);
      const status = await addCommentDislikeRepository(DTO);
      setLikeDislikeStatus(status);
      setDislikes((prev) => Number(prev) + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const removeCommentDislike =
  (commentID, setError, setLoading, setLikeDislikeStatus, setDislikes, clb) =>
  async (dispatch, getState) => {
    const {
      app: { token },
    } = getState();

    const DTO = {
      token,
      commentID,
    };

    try {
      setLoading(true);
      const status = await removeCommentDislikeRepository(DTO);
      setLikeDislikeStatus(status);
      setDislikes((prev) => Number(prev) - 1);
      if (clb) clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
