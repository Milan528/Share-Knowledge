import styled from 'styled-components';
import { Button } from '@mui/material';

export const ContentContainer = styled.div`
  width: 70%;
  min-width: 230px;
  margin: 5px auto 0 auto;
  flex: 1;
`;

export const StyledH1 = styled.h1`
  text-align: center;
`;

export const StyledButton = styled(Button)`
  && {
    border-radius: 10px;
    margin-left: 10px;
    position: absolute;
    top: 75px;
    right: 50px;
  }
`;
