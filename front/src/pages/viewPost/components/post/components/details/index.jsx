import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import {
  Container,
  Likes,
  DateIcon,
  DetailsContainer,
  DateContainer,
  StyledButton,
  LikeIcon,
  DislikeIcon,
} from './styles';
import {
  addPostDislike,
  addPostLike,
  checkUserLikeDislike,
  removePostDislike,
  removePostLike,
} from '../../../../reduxThunk/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const postLikeDislikeStatus = {
  liked: 'liked',
  disliked: 'disliked',
  none: 'none',
};

const Details = (props) => {
  const { likes: propLikes, date, dislikes: propDislikes, postId } = props;
  const [likes, setLikes] = useState(propLikes);
  const [dislikes, setDislikes] = useState(propDislikes);
  const token = useSelector((state) => state.app.token);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeDislikeStatus, setLikeDislikeStatus] = useState(null);

  useEffect(() => {
    if (token) {
      dispatch(
        checkUserLikeDislike(
          token,
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus
        )
      );
    }
  }, [token, postId, dispatch]);

  const handleLike = () => {
    if (likeDislikeStatus === postLikeDislikeStatus.none) {
      dispatch(
        addPostLike(
          token,
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setLikes,
          setDislikes
        )
      );
    } else if (likeDislikeStatus === postLikeDislikeStatus.liked) {
      dispatch(
        removePostLike(
          token,
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setLikes,
          setDislikes
        )
      );
    }
  };

  const handleDislike = () => {
    if (likeDislikeStatus === postLikeDislikeStatus.none) {
      dispatch(
        addPostDislike(
          token,
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setLikes,
          setDislikes
        )
      );
    } else if (likeDislikeStatus === postLikeDislikeStatus.disliked) {
      dispatch(
        removePostDislike(
          token,
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setLikes,
          setDislikes
        )
      );
    }
  };

  return (
    <Container>
      <DetailsContainer>
        <StyledButton onClick={handleLike} disabled={loading}>
          <LikeIcon like_dislike_status={likeDislikeStatus} />
          <Likes color="textSecondary">{likes}</Likes>
        </StyledButton>
        <StyledButton
          color="primary"
          onClick={handleDislike}
          disabled={loading}
        >
          <DislikeIcon like_dislike_status={likeDislikeStatus} />
          <Likes color="textSecondary">{dislikes}</Likes>
        </StyledButton>
        {error ? <p>Unable to like/unlike posts. Error ocured.</p> : null}
        <DateContainer>
          <DateIcon />
          <Typography> {date} </Typography>
        </DateContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
