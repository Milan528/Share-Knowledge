import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export const StyledPaper = styled(Paper)`
  padding: 10px;
  padding-right: 15px;
  margin-bottom: 30px;
  min-height: 150px;
  flex-grow: 1;
  display: flex-block;
  border: 0.5px solid #c9cace;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;

  min-width: 230px;
  margin: 5px auto 20px auto;
  flex: 1;

  @media screen and (max-width: 400px) {
    justify-content: space-evenly;
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;
`;
