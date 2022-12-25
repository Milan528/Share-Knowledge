import styled from 'styled-components';

export const OrdersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  min-width: 20rem;
  @media (max-width: 650px) {
    min-width: 10rem;
  }
`;
