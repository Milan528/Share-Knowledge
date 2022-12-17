import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Today from '@mui/icons-material/Today';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { commentLikeDislikeStatus } from '.';

export const LikeIcon = styled(ThumbUpOffAltIcon)`
  color: ${({ like_dislike_status }) =>
    like_dislike_status === commentLikeDislikeStatus.liked ? 'green' : ''};
`;
export const DislikeIcon = styled(ThumbDownOffAltIcon)`
  color: ${({ like_dislike_status }) =>
    like_dislike_status === commentLikeDislikeStatus.disliked ? 'red' : ''};
`;

export const ButtonText = styled(Typography)`
  && {
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: flex-end;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Likes = styled(Typography)`
  && {
    margin: 0px 0px -3px 5px;
  }
`;

export const DateIcon = styled(Today)`
  && {
    margin-left: 10px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: end;
`;

export const StyledButton = styled(Button)`
  && {
    color: rgb(0 0 0 / 87%);
  }
`;
