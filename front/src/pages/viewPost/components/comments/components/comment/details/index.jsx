import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  addCommentDislike,
  addCommentLike,
  removeCommentDislike,
  removeCommentLike,
} from '../../../../../reduxThunk/actions';
export const commentLikeDislikeStatus = {
  liked: 'liked',
  disliked: 'disliked',
  none: 'none',
};
const Details = (props) => {
  const {
    likes: propLikes,
    date,
    dislikes: propDislikes,
    commentId,
    likeStatus,
  } = props;
  const [likes, setLikes] = useState(propLikes);
  const [dislikes, setDislikes] = useState(propDislikes);
  const token = useSelector((state) => state.app.token);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [likeDislikeStatus, setLikeDislikeStatus] = useState(likeStatus);

  const handleLike = () => {
    if (token && likeDislikeStatus === commentLikeDislikeStatus.none) {
      dispatch(
        addCommentLike(
          commentId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setLikes
        )
      );
    } else if (token && likeDislikeStatus === commentLikeDislikeStatus.liked) {
      dispatch(
        removeCommentLike(
          commentId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setLikes
        )
      );
    } else if (
      token &&
      likeDislikeStatus === commentLikeDislikeStatus.disliked
    ) {
      dispatch(
        removeCommentDislike(
          commentId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setDislikes,
          () =>
            dispatch(
              addCommentLike(
                commentId,
                setError,
                setLoading,
                setLikeDislikeStatus,
                setLikes
              )
            )
        )
      );
    }
  };

  const handleDislike = () => {
    if (token && likeDislikeStatus === commentLikeDislikeStatus.none) {
      dispatch(
        addCommentDislike(
          commentId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setDislikes
        )
      );
    } else if (
      token &&
      likeDislikeStatus === commentLikeDislikeStatus.disliked
    ) {
      dispatch(
        removeCommentDislike(
          commentId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setDislikes
        )
      );
    } else if (token && likeDislikeStatus === commentLikeDislikeStatus.liked) {
      dispatch(
        removeCommentLike(
          commentId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setLikes,
          () =>
            dispatch(
              addCommentDislike(
                commentId,
                setError,
                setLoading,
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
        {error ? <p>Unable to like/unlike. Error ocured.</p> : null}
        <DateContainer>
          <DateIcon />
          <Typography> {date} </Typography>
        </DateContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
