import styled from 'styled-components';
import Button from '@mui/material/Button';
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { MenuList } from '@mui/material';

export const StyledMenuList = styled(MenuList)`
  && {
    padding-top: 0px;
  }
`;

export const StyledArrow = styled(DoubleArrow)`
  && {
    transform: ${({ hidden }) => (!hidden ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const ToggleButton = styled(Button).attrs((/* props */) => ({
  fullWidth: true,
  disableRipple: true,
  variant: 'contained',
}))`
  && {
    color: black;
    background: white;
    justify-content: flex-end;
    border: 1px solid #e0e0e0;
    box-shadow: none;
    border-radius: 0px;
    border-right: 0px;
    padding-right: 5px;
    &:hover {
      background: white;
      box-shadow: none;
      border-radius: 0px;
    }
  }
`;

export const SlidingContainer = styled.div`
  min-width: 150px;
  margin-top: 50px;
  display: block;
  position: fixed;
  left: ${({ hidden }) => (hidden ? '-130px' : '0px')};
  transition: 0.3s ease-out;
  text-align: right;
  height: 100%;
  overflow: auto;
  box-shadow: 2px 1px 5px 0 #393a3d26;
  background: white;
  z-index: 2;
`;

export const Options = styled.div`
  margin-top: -1px;
  background-color: white;
  position: relative;
`;

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
