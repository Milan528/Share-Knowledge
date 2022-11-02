import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export const ContentContainer = styled.div`
  width: 70%;
  min-width: 230px;
  margin: 5px auto 0 auto;
  flex: 1;
`;

export const StyledPaper = styled(Paper)`
  padding: 10px;
  padding-right: 15px;
  margin-bottom: 30px;
  min-height: 150px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #c9cace;
`;
