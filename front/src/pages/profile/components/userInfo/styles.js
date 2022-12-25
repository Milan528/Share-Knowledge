import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Divider } from '@mui/material';

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDivider = styled(Divider)`
  && {
    margin-top: 5px;
  }
`;
