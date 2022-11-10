import styled from 'styled-components';

export const OrdersContainer = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;

  @media (max-width: 650px) : {
    flex-direction: column;
  }
`;
