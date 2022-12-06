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
import { getPostRepository } from '../repository/post';

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
  (setError, setLoading, comment, postID) => async (dispatch, getState) => {
    try {
      setLoading(true);

      await addCommentRepository(comment);
      dispatch(loadComments(postID));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

// export const loadSpecificPosts = () => async (dispatch, getState) => {
//   const {
//     home: {
//       tags: { selectedTags },
//       state: { type, search, currentPage, postPerPage },
//     },
//   } = getState();

//   let tagsId = selectedTags.map((tag) => tag.id);
//   let dto = {
//     tags: tagsId,
//     startIndex: (currentPage - 1) * postPerPage,
//     count: postPerPage,
//     search,
//     type,
//   };
//   try {
//     dispatch(loadingPosts(true));
//     const { posts, totalNumberOfPages } = await getAllSpecificPostsRepository(
//       dto
//     );

//     console.log(totalNumberOfPages);

//     dispatch(setPosts(posts));
//     dispatch(setTotalNumberOfPages(totalNumberOfPages));
//   } catch (err) {
//     dispatch(setErrorPosts(serialize(err)));
//   } finally {
//     dispatch(loadingPosts(false));
//   }
// };
