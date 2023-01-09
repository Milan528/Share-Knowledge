import { Tooltip } from '@mui/material';
import React from 'react';
import {
  HeadingContainer,
  StyledTypography,
  StyledBookIcon,
  StyledHelpIcon,
  PostedByContainer,
  DateIcon,
  StyledPostedByTypography,
  DateContainer,
  StyledH3,
} from './styles';
import { profileRoute } from '../../../../app/router/routes';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

const Title = (props) => {
  const { title, type, postedBy, date } = props;
  const navigate = useNavigate();

  const handleVisitUserProfile = () => {
    navigate({
      pathname: profileRoute,
      search: `username=${postedBy}`,
    });
  };

  const handleClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const typeIcon =
    type === 'material' ? (
      <Tooltip title="Materijal">
        <StyledBookIcon />
      </Tooltip>
    ) : (
      <Tooltip title="Pitanje">
        <StyledHelpIcon />
      </Tooltip>
    );

  return (
    <>
      <HeadingContainer>
        <StyledTypography onClick={handleClick} variant="h5">
          {typeIcon}
          {title}
        </StyledTypography>
      </HeadingContainer>
      <PostedByContainer>
        <StyledH3>{postedBy}</StyledH3>
        <DateContainer>
          <DateIcon />
          <Typography> {date}</Typography>
        </DateContainer>
      </PostedByContainer>
    </>
  );
};

export default Title;
