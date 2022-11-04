import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';

export const StyledTabs = styled(Tabs)`
  && {
    // display: flex;
    // align-items: end;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: end;
  @media (min-width: 1200px) {
    margin-left: 20px;
  }
  justify-content: center;
`;
