import styled from 'styled-components';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';

export const StyledListItemHeaderText = styled(ListItemText)`
  && {
    text-align: start;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    margin-right: ${({ hidden }) => (hidden ? '50px' : '')};
  }
`;
