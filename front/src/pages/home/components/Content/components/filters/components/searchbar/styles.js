import styled from "styled-components";

export const SearchBarContainer = styled.div`
  border: solid 2px black;
  border-radius: 5px;
  margin-top: 12px;
`;

export const SearchContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  border: none;
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
  outline: none;
  min-width: 0px;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: #18d4de;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
