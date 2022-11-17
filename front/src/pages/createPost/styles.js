import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const Container = styled.div`
  flex-row: 1;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const PageHeading = styled(Typography)`
  && {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;
