import styled from 'styled-components';
import Chip from '@mui/material/Chip';

export const StyledChip = styled(Chip)`
  && {
    cursor: default;
    background: #1976d2;
    color: white;
    margin: 0px 2px 0px 2px;

    :hover {
      background: #1976d2;
      color: white;
      margin: 0px 2px 0px 2px;
    }
  }
`;
