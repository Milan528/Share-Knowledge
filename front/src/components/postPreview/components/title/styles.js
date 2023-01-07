import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import BookIcon from '@mui/icons-material/MenuBook';
import Today from '@mui/icons-material/Today';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: fit-content;
`;

export const StyledTypography = styled(Typography)`
  && {
    flex: 1;
    cursor: initial;
  }
`;

export const StyledHelpIcon = styled(HelpIcon)`
  margin-right: 5px;
`;

export const StyledBookIcon = styled(BookIcon)`
  margin-right: 5px;
`;

export const PostedByContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  min-width: fit-content;
  align-items: center;
`;

export const DateIcon = styled(Today)`
  && {
    margin-left: 10px;
  }
`;

export const StyledPostedByTypography = styled(Typography)``;
