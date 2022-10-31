import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: gray;
  color: white;
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
  max-width: 95%;
  margin-right: auto;

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
