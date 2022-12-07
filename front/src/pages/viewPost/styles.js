import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 70%;
  min-width: 230px;
  margin: 5px auto 0 auto;
  flex: 1;

  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;

export const AddCommentContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 20px;
  margin-bottom: 10px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 70%;
  min-width: 230px;
  margin: 5px auto 0 auto;
  flex: 1;

  @media screen and (max-width: 400px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;
`;
