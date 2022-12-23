import React from 'react';
import {
  Container,
  Likes,
  DetailsContainer,
  StyledButton,
  LikeIcon,
  DislikeIcon,
  ControllsContainer,
  StyledDeleteIconButton,
} from './styles';
import {
  addPostDislike,
  addPostLike,
  deletePost,
  removePostDislike,
  removePostLike,
} from '../../../../reduxThunk/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { postLikeDislikeStatus } from '../../../../../../utils/enums';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress, Tooltip } from '@mui/material';
import { homeRoute } from '../../../../../../app/router/routes';
import { useNavigate } from 'react-router-dom';

const Details = (props) => {
  const {
    likes: propLikes,
    dislikes: propDislikes,
    postId,
    likeStatus,
  } = props;
  const [likes, setLikes] = useState(propLikes);
  const [dislikes, setDislikes] = useState(propDislikes);
  const token = useSelector((state) => state.app.token);
  const dispatch = useDispatch();
  const [errorLikeDislike, setErrorLikeDislike] = useState(null);
  const [loadingLikeDislike, setLoadingLikeDislike] = useState(false);
  const [likeDislikeStatus, setLikeDislikeStatus] = useState(likeStatus);
  const navigate = useNavigate();
  const [errorPostDeleting, setErrorPostDeleting] = useState(null);
  const [loadingPostDeleting, setLoadingPostDeleting] = useState(false);

  const handleDelete = () => {
    dispatch(
      deletePost(postId, setLoadingPostDeleting, setErrorPostDeleting, () =>
        navigate(homeRoute)
      )
    );
  };

  const handleLike = () => {
    if (token && likeDislikeStatus === postLikeDislikeStatus.none) {
      dispatch(
        addPostLike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setLikes
        )
      );
    } else if (token && likeDislikeStatus === postLikeDislikeStatus.liked) {
      dispatch(
        removePostLike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setLikes
        )
      );
    } else if (token && likeDislikeStatus === postLikeDislikeStatus.disliked) {
      dispatch(
        removePostDislike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setDislikes,
          () =>
            dispatch(
              addPostLike(
                postId,
                setErrorLikeDislike,
                setLoadingLikeDislike,
                setLikeDislikeStatus,
                setLikes
              )
            )
        )
      );
    }
  };

  const handleDislike = () => {
    if (token && likeDislikeStatus === postLikeDislikeStatus.none) {
      dispatch(
        addPostDislike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setDislikes
        )
      );
    } else if (token && likeDislikeStatus === postLikeDislikeStatus.disliked) {
      dispatch(
        removePostDislike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setDislikes
        )
      );
    } else if (token && likeDislikeStatus === postLikeDislikeStatus.liked) {
      dispatch(
        removePostLike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setLikes,
          () =>
            dispatch(
              addPostDislike(
                postId,
                setErrorLikeDislike,
                setLoadingLikeDislike,
                setLikeDislikeStatus,
                setDislikes
              )
            )
        )
      );
    }
  };

  return (
    <Container>
      <DetailsContainer>
        <StyledButton onClick={handleLike} disabled={loadingLikeDislike}>
          <LikeIcon like_dislike_status={likeDislikeStatus} />
          <Likes color="textSecondary">{likes}</Likes>
        </StyledButton>
        <StyledButton
          color="primary"
          onClick={handleDislike}
          disabled={loadingLikeDislike}
        >
          <DislikeIcon like_dislike_status={likeDislikeStatus} />
          <Likes color="textSecondary">{dislikes}</Likes>
        </StyledButton>
        {errorLikeDislike ? <p>Unable to like/unlike. Error ocured.</p> : null}

        <ControllsContainer>
          {loadingPostDeleting ? <CircularProgress /> : null}
          {errorPostDeleting ? 'Brisanje neuspesno' : null}
          <Tooltip title="Obriši">
            <StyledDeleteIconButton
              onClick={handleDelete}
              disabled={loadingPostDeleting}
              color="primary"
            >
              <DeleteIcon />
            </StyledDeleteIconButton>
          </Tooltip>
        </ControllsContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
