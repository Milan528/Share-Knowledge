import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import BookIcon from '@mui/icons-material/MenuBook';
import Today from '@mui/icons-material/Today';

export const HeadingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: fit-content;
  flex-direction: row-reverse;
  margin-left: 4px;
`;

export const StyledTypography = styled(Typography)`
  && {
    flex: 1;
    cursor: initial;
    margin-top: -4px;
    display: inline;
  }
`;

export const StyledHelpIcon = styled(HelpIcon)`
  margin-right: 5px;
  margin-bottom: -5px;
`;

export const StyledBookIcon = styled(BookIcon)`
  margin-right: 5px;
  margin-bottom: -5px;
`;

export const PostedByContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  min-width: fit-content;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const DateIcon = styled(Today)`
  && {
    margin-left: 2px;
    color: #808080;
  }
`;

export const StyledH3 = styled.h3`
  margin-right: 8px;
  font-size: 1rem;
  font-style: italic;
`;

export const StyledPostedByTypography = styled(Typography)``;
