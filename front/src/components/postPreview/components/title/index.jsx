import { Tooltip } from '@mui/material';
import React from 'react';
import {
  Container,
  StyledTypography,
  StyledBookIcon,
  StyledHelpIcon,
  PostedByContainer,
  DateIcon,
  StyledPostedByTypography,
  DateContainer,
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

  return (
    <>
      <Container>
        {type === 'material' ? (
          <Tooltip title="Materijal">
            <StyledBookIcon />
          </Tooltip>
        ) : (
          <Tooltip title="Pitanje">
            <StyledHelpIcon />
          </Tooltip>
        )}
        <PostedByContainer>
          <StyledPostedByTypography variant="h6">
            Postavio/la{' '}
          </StyledPostedByTypography>
          <Button onClick={handleVisitUserProfile}>
            <AccountCircleIcon />
            {postedBy}
          </Button>
        </PostedByContainer>
        <DateContainer>
          <DateIcon />
          <Typography> {date}</Typography>
        </DateContainer>
      </Container>
      <StyledTypography onClick={handleClick} variant="h5">
        {title}
      </StyledTypography>
    </>
  );
};

export default Title;