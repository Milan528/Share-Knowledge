import { Tooltip } from '@mui/material';
import React from 'react';
import {
  Container,
  StyledTypography,
  StyledBookIcon,
  StyledHelpIcon,
  PostedByContainer,
  ControllsContainer,
  StyledDeleteIconButton,
} from './styles';
import { profileRoute } from '../../../../../../app/router/routes';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../../reduxThunk/actions';

const Title = (props) => {
  const { title, type, postedBy, id } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleVisitUserProfile = () => {
    navigate({
      pathname: profileRoute,
      search: `username=${postedBy}`,
    });
  };

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      <Container>
        <StyledTypography variant="h5">{title}</StyledTypography>

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
        <StyledTypography variant="h6">Postavio/la</StyledTypography>
        <Button onClick={handleVisitUserProfile}>
          <AccountCircleIcon />
          {postedBy}
        </Button>
        <ControllsContainer>
          <Tooltip title="Obriši">
            <StyledDeleteIconButton onClick={handleDelete} color="primary">
              <DeleteIcon />
            </StyledDeleteIconButton>
          </Tooltip>
        </ControllsContainer>
      </PostedByContainer>
    </div>
  );
};

export default Title;
