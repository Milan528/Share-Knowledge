import styled from 'styled-components';
import Divider from '@mui/material/Divider';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const AdditionalFiltersContainer = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const StyledDivider = styled(Divider)`
  && {
    margin-top: 10px;
  }
`;
