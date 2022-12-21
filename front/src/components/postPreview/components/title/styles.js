import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import BookIcon from '@mui/icons-material/MenuBook';
import Today from '@mui/icons-material/Today';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTypography = styled(Typography)`
  && {
    flex: 1;
  }
`;

export const StyledHelpIcon = styled(HelpIcon)`
  margin-right: 10px;
`;

export const StyledBookIcon = styled(BookIcon)`
  margin-right: 10px;
`;

export const PostedByContainer = styled.div`
  display: flex;
`;

export const DateIcon = styled(Today)`
  && {
    margin-left: 10px;
  }
`;

export const StyledPostedByTypography = styled(Typography)``;
