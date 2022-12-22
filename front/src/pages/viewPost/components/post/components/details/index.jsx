import React from 'react';
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
  removePostDislike,
  removePostLike,
} from '../../../../reduxThunk/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { postLikeDislikeStatus } from '../../../../../../utils/enums';

const Details = (props) => {
  const {
    likes: propLikes,
    date,
    dislikes: propDislikes,
    postId,
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
    if (token && likeDislikeStatus === postLikeDislikeStatus.none) {
      dispatch(
        addPostLike(
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setLikes
        )
      );
    } else if (token && likeDislikeStatus === postLikeDislikeStatus.liked) {
      dispatch(
        removePostLike(
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setLikes
        )
      );
    } else if (token && likeDislikeStatus === postLikeDislikeStatus.disliked) {
      dispatch(
        removePostDislike(
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setDislikes,
          () =>
            dispatch(
              addPostLike(
                postId,
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
    if (token && likeDislikeStatus === postLikeDislikeStatus.none) {
      dispatch(
        addPostDislike(
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setDislikes
        )
      );
    } else if (token && likeDislikeStatus === postLikeDislikeStatus.disliked) {
      dispatch(
        removePostDislike(
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setDislikes
        )
      );
    } else if (token && likeDislikeStatus === postLikeDislikeStatus.liked) {
      dispatch(
        removePostLike(
          postId,
          setError,
          setLoading,
          setLikeDislikeStatus,
          setLikes,
          () =>
            dispatch(
              addPostDislike(
                postId,
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
