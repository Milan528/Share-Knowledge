import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export const StyledText = styled(Typography)`
  && {
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    cursor: initial;
  }
`;

export const StyledImg = styled.img`
  margin-bottom: 20;
  margin-right: 5;
`;
