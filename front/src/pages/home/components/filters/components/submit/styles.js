import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
    align-self: end;
    height: 56px;
    @media (max-width: 650px) {
      width: 100%;
    }
  }
`;
