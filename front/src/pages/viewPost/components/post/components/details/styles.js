import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Today from '@mui/icons-material/Today';
import { Button } from '@mui/material';

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
  justify-content: end;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  && {
    color: rgb(0 0 0 / 87%);
  }
`;
