import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Today from '@mui/icons-material/Today';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export const LikeIcon = styled(ThumbUpOffAltIcon)`
  color: grey;
`;

export const DislikeIcon = styled(ThumbDownOffAltIcon)`
  color: grey;
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

export const LikesWrapper = styled.div`
  display: flex;
  margin-right: 5px;
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
