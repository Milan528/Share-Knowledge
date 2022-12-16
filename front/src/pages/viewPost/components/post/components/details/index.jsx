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
import ThumbUp from '@mui/icons-material/ThumbUp';
import ThumbDown from '@mui/icons-material/ThumbDown';
import {
  addPostDislike,
  addPostLike,
  checkUserLikeDislike,
  handlePostLikeUnlike,
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
  const { likes, date, dislikes, postId } = props;
  const token = useSelector((state) => state.app.token);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeDislikeStatus, setLikeDislikeStatus] = useState(null);

  console.log(likeDislikeStatus);

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
  }, [token, postId]);

  const handleLike = () => {
    if (likeDislikeStatus === postLikeDislikeStatus.none) {
      dispatch(
        addPostLike(token, postId, setError, setLoading, setLikeDislikeStatus)
      );
    } else if (likeDislikeStatus === postLikeDislikeStatus.liked) {
      dispatch(
        removePostLike(
          token,
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus
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
          setLikeDislikeStatus
        )
      );
    } else if (likeDislikeStatus === postLikeDislikeStatus.disliked) {
      dispatch(
        removePostDislike(
          token,
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus
        )
      );
    }
  };

  return (
    <Container>
      <DetailsContainer>
        <StyledButton onClick={handleLike} disabled={loading}>
          <LikeIcon like_dislike_status={likeDislikeStatus} />
          <Likes color="textSecondary">
            {likeDislikeStatus === postLikeDislikeStatus.liked
              ? Number(likes) + 1
              : likes}
          </Likes>
        </StyledButton>
        <StyledButton
          color="primary"
          onClick={handleDislike}
          disabled={loading}
        >
          <DislikeIcon like_dislike_status={likeDislikeStatus} />
          <Likes color="textSecondary">
            {likeDislikeStatus === postLikeDislikeStatus.disliked
              ? Number(dislikes) + 1
              : dislikes}
          </Likes>
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
