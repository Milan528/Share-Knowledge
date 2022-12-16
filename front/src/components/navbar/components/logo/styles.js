import styled from 'styled-components';

export const StyledLogo = styled.div`
  padding: 2px;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const ContextMenuContainerDiv = styled.ul`
  position: absolute;
  top: ${({ mouseY }) => mouseY}px;
  left: ${({ mouseX }) => mouseX}px;
  color: black;
  background: white;
  border: 0.5px solid #c9cace;
  padding: 10px;
`;
