import React, { useEffect } from 'react';
import ErrorDialog from '../../../../components/errorDialog';
import { StyledPaper } from './styles';
import Title from './components/title';
import Loader from '../../../../components/loader';
import Content from './components/contet';
import Details from './components/details';
import Tags from './components/tags';
import { setError } from './redux/slices';
import { useSelector, useDispatch } from 'react-redux';
import { loadPost } from '../../reduxThunk/actions';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { viewPostRoute } from '../../../../app/router/routes';
import { loadPostForHomepageFilters } from '../../reduxThunk/actions';

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.viewPost.post);
  const { loading, error, post, postIndex } = state;
  const [searchParams] = useSearchParams();
  const searchParamsPostId = searchParams.get('postId');
  const location = useLocation();
  const homepageFilters = location.state
    ? location.state.homepageFilters
    : null;

  useEffect(() => {
    if (!homepageFilters && !Number.isFinite(postIndex)) {
      dispatch(loadPost(searchParamsPostId));
    }
  }, [dispatch, searchParamsPostId, homepageFilters, postIndex]);

  useEffect(() => {
    if (homepageFilters && Number.isFinite(postIndex)) {
      dispatch(
        loadPostForHomepageFilters(postIndex, homepageFilters, (postId) => {
          navigate(
            {
              pathname: viewPostRoute,
              search: `postId=${postId}`,
            },
            {
              state: {
                homepageFilters,
                postIndex,
              },
              replace: true,
            }
          );
        })
      );
    }
  }, [postIndex, dispatch, homepageFilters, navigate]);

  const viewToRender = () => {
    if (post) {
      const {
        title,
        type,
        text,
        files,
        tags,
        likes,
        dislikes,
        id,
        date,
        postedBy,
        likeStatus,
      } = post;

      return (
        <StyledPaper elevation={1}>
          <Title title={title} type={type} postedBy={postedBy} date={date} />
          <Content text={text} files={files} />
          <Tags tags={tags} />
          <Details
            likes={likes}
            postId={id}
            dislikes={dislikes}
            likeStatus={likeStatus}
          />
        </StyledPaper>
      );
    } else {
      return null;
    }
  };

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    viewToRender()
  );
};

export default Post;
