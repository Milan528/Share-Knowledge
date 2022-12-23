import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { commentLikeDislikeStatus } from '../../../../../../../utils/enums';

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

export const StyledButton = styled(Button)`
  && {
    color: rgb(0 0 0 / 87%);
  }
`;

export const ControllsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
`;

export const StyledDeleteIconButton = styled(IconButton)`
  && {
    margin-right: -8px;
  }
`;
