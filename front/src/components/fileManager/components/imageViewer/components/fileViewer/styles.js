import styled from 'styled-components';

export const ImageContainer = styled.div`
  height: 80%;
  width: 65%;
  max-width: 1024px;

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

export const Image = styled.div`
  border-radius: 10px;
  position: relative;
  height: 100%;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
