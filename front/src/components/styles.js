import styled from "styled-components";

export const buttonSize = {
  sm: "12px",
  md: "14px",
  lg: "16px",
  xl: "18px",
};

export const StyledButton = styled.button`
  font-weight: 500;
  font-size: ${({ size }) => (size ? size : "16px")};
  background-color: ${({ backgroudColor }) =>
    backgroudColor ? backgroudColor : "green"};
  color: ${({ textColor }) => (textColor ? textColor : "white")};
  border-radius: 10px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 2px solid transparent;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const ColumnFlexContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
`;
