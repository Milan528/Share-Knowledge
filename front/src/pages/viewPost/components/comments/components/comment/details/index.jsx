import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  addCommentDislike,
  addCommentLike,
  deleteComment,
  removeCommentDislike,
  removeCommentLike,
} from '../../../../../reduxThunk/actions';
import { commentLikeDislikeStatus } from '../../../../../../../utils/enums';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress, Tooltip } from '@mui/material';

const Details = (props) => {
  const {
    likes: propLikes,
    dislikes: propDislikes,
    commentId,
    likeStatus,
  } = props;
  const [likes, setLikes] = useState(propLikes);
  const [dislikes, setDislikes] = useState(propDislikes);
  const token = useSelector((state) => state.app.token);
  const dispatch = useDispatch();
  const [errorLikeDislike, setErrorLikeDislike] = useState(null);
  const [loadingLikeDislike, setLoadingLikeDislike] = useState(false);
  const [likeDislikeStatus, setLikeDislikeStatus] = useState(likeStatus);
  const [errorCommentDeleting, setErrorCommentDeleting] = useState(null);
  const [loadingCommentDeleting, setLoadingCommentDeleting] = useState(false);

  const handleDelete = () => {
    dispatch(
      deleteComment(
        commentId,
        setLoadingCommentDeleting,
        setErrorCommentDeleting
      )
    );
  };

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
          {loadingCommentDeleting ? <CircularProgress /> : null}
          {errorCommentDeleting ? 'Brisanje neuspesno' : null}
          <Tooltip title="Obriši">
            <StyledDeleteIconButton
              onClick={handleDelete}
              disabled={loadingCommentDeleting}
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
