import React, { useState } from 'react';
import {
  addCommentDislike,
  addCommentLike,
  removeCommentDislike,
  removeCommentLike,
} from '../../../../../../../reduxThunk/actions';
import { Likes, StyledButton, LikeIcon, DislikeIcon } from './styles';
import { commentLikeDislikeStatus } from '../../../../../../../../../utils/enums';
import { useDispatch, useSelector } from 'react-redux';

export const LikeDislike = ({
  likes: propLikes,
  dislikes: propDislikes,
  commentId,
  likeStatus,
}) => {
  const [likes, setLikes] = useState(propLikes);
  const [dislikes, setDislikes] = useState(propDislikes);
  const token = useSelector((state) => state.app.token);
  const dispatch = useDispatch();
  const [errorLikeDislike, setErrorLikeDislike] = useState(null);
  const [loadingLikeDislike, setLoadingLikeDislike] = useState(false);
  const [likeDislikeStatus, setLikeDislikeStatus] = useState(likeStatus);

  const handleLike = () => {
    if (token && likeDislikeStatus === commentLikeDislikeStatus.none) {
      dispatch(
        addCommentLike(
          commentId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setLikes
        )
      );
    } else if (token && likeDislikeStatus === commentLikeDislikeStatus.liked) {
      dispatch(
        removeCommentLike(
          commentId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
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
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setDislikes,
          () =>
            dispatch(
              addCommentLike(
                commentId,
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
    if (token && likeDislikeStatus === commentLikeDislikeStatus.none) {
      dispatch(
        addCommentDislike(
          commentId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
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
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setDislikes
        )
      );
    } else if (token && likeDislikeStatus === commentLikeDislikeStatus.liked) {
      dispatch(
        removeCommentLike(
          commentId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setLikes,
          () =>
            dispatch(
              addCommentDislike(
                commentId,
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

  const viewToRender = (
    <>
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
    </>
  );

  return viewToRender;
};

export default LikeDislike;
