import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import BookIcon from '@mui/icons-material/MenuBook';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTypography = styled(Typography)`
  text: {
    margin-bottom: 20;
    display: flex;
    word-wrap: break-word;
  }
`;

export const StyledHelpIcon = styled(HelpIcon)`
  margin-left: 20;
`;

export const StyledBookIcon = styled(BookIcon)`
  margin-left: 20;
`;
