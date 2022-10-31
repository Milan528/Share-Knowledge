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
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0px")};
  border-radius: 10px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 2px solid transparent;
`;

export const FlexContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const ColumnFlexContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
`;

export const Spacer = styled.div`
  border-top: 1px solid #3f3r45;
`;
