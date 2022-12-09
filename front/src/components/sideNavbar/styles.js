import styled from 'styled-components';
import Button from '@mui/material/Button';
import DoubleArrow from '@mui/icons-material/DoubleArrow';

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
    min-width: 250px;
    &:hover {
      background-color: white;,
    }
  }
`;

export const FixedContainer = styled.div`
  width: 50px;
  position: relative;
  overflow: hidden;
  margin-top: -20px;
`;

export const SlidingContainer = styled.div`
  display: block;
  position: fixed;
  left: ${({ hidden }) => (hidden ? '-200px' : '0px')};
  transition: 0.3s ease-out;
  text-align: right;
  height: 100%;
  overflow: auto;
  box-shadow: 2px 1px 5px 0 #393a3d26;
`;

export const Options = styled.div`
  margin-top: -1px;
  background-color: white;
  position: relative;
`;
