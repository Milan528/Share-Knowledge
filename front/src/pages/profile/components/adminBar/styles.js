import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import DoubleArrow from '@mui/icons-material/DoubleArrow';

export const StyledArrow = styled(DoubleArrow)`
  && {
    transform: ${({ hidden }) => (!hidden ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const StyledDrawer = styled(Drawer)`
  && {
    width: 200px;
  }
`;

export const ToggleButton = styled(Button).attrs((/* props */) => ({
  fullWidth: true,
  disableRipple: true,
}))`
  && {
    transition: 0.3s ease-out;
    color: black;
    justify-content: flex-end;
  }
`;

export const SliderContainer = styled.div`
  min-width: ${({ hidden }) => (hidden ? '80px' : '200px')};
  transition: 0.3s ease-out;
  width: 200px;
  margin-top: -20px;
  position: relative;
  overflow: hidden;
`;

export const Slider = styled.div`
  display: block;
  position: fixed;
  left: ${({ hidden }) => (hidden ? '-120px' : '0px')};
  width: 200px;
  transition: 0.3s ease-out;
  background-color: white;
  text-align: right;
  height: 100%;
  border-right: 1px solid #e0e0e0;
  box-shadow: 2px 0px 5px 0 #393a3d26;
  overflow: auto;
`;

export const StyledDivider = styled(Divider)`
  background-color: white;
`;
