import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comment from './components/comment';
import ErrorDialog from '../../../../components/errorDialog';
import Loader from '../../../../components/loader';
import { setError } from './redux/slices';
import { loadComments } from '../../reduxThunk/actions';
import { useSearchParams } from 'react-router-dom';

const Comments = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.viewPost.comments);
  const { loading, error, comments } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const postID = searchParams.get('postId');

  useEffect(() => {
    dispatch(loadComments(postID));
  }, [dispatch, postID]);

  return error ? (
    <ErrorDialog error={error} handleError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    comments.map((comment) => (
      <Comment key={JSON.stringify(comment)} data={comment} />
    ))
  );
};

export default Comments;
