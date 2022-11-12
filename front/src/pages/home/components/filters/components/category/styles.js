import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 650px) {
    width: 100%;
    > div {
      width: 100%;
    }
  }
`;
