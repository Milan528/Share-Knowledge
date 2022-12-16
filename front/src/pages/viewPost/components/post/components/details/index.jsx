import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import {
  Container,
  Likes,
  DateIcon,
  DetailsContainer,
  DateContainer,
  StyledButton,
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

const Details = (props) => {
  const { likes, date, dislikes, postId } = props;
  const token = useSelector((state) => state.app.token);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeDislikeStatus, setLikeDislikeStatus] = useState(null);

  const postLikeDislikeStatus = {
    liked: 'liked',
    disliked: 'disliked',
    none: 'none',
  };

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
    } else {
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
    } else {
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
          <ThumbUp />
          <Likes color="textSecondary"> {likes} </Likes>
        </StyledButton>
        <StyledButton
          color="primary"
          onClick={handleDislike}
          disabled={loading}
        >
          <ThumbDown />
          <Likes color="textSecondary"> {dislikes} </Likes>
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
