import React, { useEffect, useState } from 'react';
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
import { HeadingContainer, StyledH1 } from './styles';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { viewPostRoute } from '../../../../app/router/routes';

const Post = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.viewPost.post);
  const { loading, error, post } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const postsIds = location.state;
  const selectedPostId = searchParams.get('postId');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPost(selectedPostId));
  }, [dispatch, selectedPostId]);

  const handleNextPost = () => {
    const selectedPostIndex = postsIds.findIndex(
      (postId) => Number(postId) === Number(selectedPostId)
    );

    const newPostIndex = (selectedPostIndex + 1) % postsIds.length;
    const newPostId = postsIds[newPostIndex];
    navigate(
      {
        pathname: viewPostRoute,
        search: `postId=${newPostId}`,
      },
      {
        state: postsIds,
      }
    );
  };
  const handlePreviousPost = () => {
    const selectedPostIndex = postsIds.findIndex(
      (postId) => Number(postId) === Number(selectedPostId)
    );

    const newPostIndex =
      (selectedPostIndex - 1 < 0 ? postsIds.length : selectedPostIndex) - 1;
    const newPostId = postsIds[newPostIndex];
    navigate(
      {
        pathname: viewPostRoute,
        search: `postId=${newPostId}`,
      },
      {
        state: postsIds,
      }
    );
  };

  const viewToRender = () => {
    const { title, type, text, files, tags, likes, id, date } = post;

    return (
      <>
        <HeadingContainer>
          {postsIds ? (
            <Button variant="outlined" onClick={handlePreviousPost}>
              <ChevronLeftIcon />
            </Button>
          ) : null}
          <StyledH1>
            {post.type === 'answer' ? 'Materijal' : 'Pitanje'}
          </StyledH1>
          {postsIds ? (
            <Button variant="outlined" onClick={handleNextPost}>
              <ChevronRightIcon />
            </Button>
          ) : null}
        </HeadingContainer>
        <StyledPaper elevation={1}>
          <Title title={title} type={type} />
          <Content text={text} files={files} />
          <Tags tags={tags} />
          <Details likes={likes} postId={id} date={date} />
        </StyledPaper>
      </>
    );
  };

  return error ? (
    <ErrorDialog error={error} handleError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    viewToRender()
  );
};

export default Post;
