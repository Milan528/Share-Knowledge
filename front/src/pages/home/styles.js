import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 70%;
  min-width: 230px;
  margin: 5px auto 0 auto;
  flex: 1;

  @media screen and (max-width: 768px) {
    width: 75%;
  }
  @media screen and (max-width: 480px) {
    width: 85%;
  }
  @media screen and (max-width: 320px) {
    width: 95%;
  }
`;
