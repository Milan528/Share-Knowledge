import styled from 'styled-components';
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import ListItemText from '@mui/material/ListItemText';
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

export const SlidingContainer = styled.div`
  margin-top: -20px;
  display: flex;
  left: ${({ hidden }) => (hidden ? '-180px' : '0px')};
  transition: 0.3s ease-out;
  text-align: right;
  overflow: auto;
  box-shadow: 2px 1px 5px 0 #393a3d26;
  background: white;
  z-index: 2;
  height: 100%;

  position: fixed;
`;

export const ToggleContainer = styled.div`
  cursor: pointer;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  width: fit-contet;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: 40px;
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

export const OptionsContainer = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  position: relative;
  width: 40px;
`;
