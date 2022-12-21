import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import BookIcon from '@mui/icons-material/MenuBook';
import { IconButton } from '@mui/material';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTypography = styled(Typography)``;

export const StyledHelpIcon = styled(HelpIcon)`
  margin-left: 20;
`;

export const StyledBookIcon = styled(BookIcon)`
  margin-left: 20;
`;

export const PostedByContainer = styled.div`
  display: flex;
`;

export const ControllsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
`;

export const StyledDeleteIconButton = styled(IconButton)`
  && {
    margin-right: -8px;
  }
`;
