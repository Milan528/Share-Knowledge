import { Tooltip } from '@mui/material';
import React from 'react';
import {
  Container,
  StyledTypography,
  StyledBookIcon,
  StyledHelpIcon,
  PostedByContainer,
} from './styles';
import { profileRoute } from '../../../../../../app/router/routes';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Title = (props) => {
  const { title, type, postedBy } = props;
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
        <StyledTypography variant="h4">{title}</StyledTypography>

        {type === 'material' ? (
          <Tooltip title="Materijal">
            <StyledBookIcon />
          </Tooltip>
        ) : (
          <Tooltip title="Pitanje">
            <StyledHelpIcon />
          </Tooltip>
        )}
      </Container>
      <PostedByContainer>
        <StyledTypography variant="h6">Posted by </StyledTypography>
        <Button onClick={handleVisitUserProfile}>
          <AccountCircleIcon />
          {postedBy}
        </Button>
      </PostedByContainer>
    </div>
  );
};

export default Title;
