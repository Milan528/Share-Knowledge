import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export const ContentContainer = styled.div`
  min-width: 230px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledTextField = styled(TextField)`
  && {
    width: 25ch;
    margin-top: 20px;
  }
`;

export const StyledFormControl = styled(FormControl)`
  && {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
