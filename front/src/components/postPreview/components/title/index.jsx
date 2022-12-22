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

  return (
    <div>
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
        <StyledTypography variant="h5">{title}</StyledTypography>
        <DateIcon />
        <Typography> {date}</Typography>
      </Container>
      <PostedByContainer>
        <StyledPostedByTypography variant="h6">
          Postavio/la{' '}
        </StyledPostedByTypography>
        <Button onClick={handleVisitUserProfile}>
          <AccountCircleIcon />
          {postedBy}
        </Button>
      </PostedByContainer>
    </div>
  );
};

export default Title;
