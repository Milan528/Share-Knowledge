import styled from 'styled-components';
import { Document, Page } from 'react-pdf';
import Divider from '@mui/material/Divider';

export const PositionContainer = styled.div`
  max-height: 400px;
`;

export const StyledDocument = styled(Document)`
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StyledPage = styled(Page)`
  margin-left: -10px;
`;

export const StyledDivider = styled(Divider)`
  margin-top: 5px;
  margin-bottom: 20px;
`;
