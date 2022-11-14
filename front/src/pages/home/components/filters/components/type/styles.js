import styled from 'styled-components';
import Select from '@mui/material/Select';

export const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  margin-top: 20px;

  .MuiFormControl-root {
    width: 135px;
  }

  @media (max-width: 650px) {
    width: 100%;

    .MuiFormControl-root {
      width: 100%;
    }
    > div {
      width: 100%;
    }
  }
`;

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    display: flex;
  }
`;
