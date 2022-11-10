import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #1976d2;
  color: white;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

export const StyledLogo = styled.div`
  padding: 2px;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-right: 5%;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  div:hover {
    color: blue;
  }

  ul {
    list-style: none;
    display: flex;
    column-gap: 1rem;
    align-items: center;
  }
`;
