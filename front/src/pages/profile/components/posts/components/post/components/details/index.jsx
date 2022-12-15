import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Container,
  Likes,
  DateIcon,
  ButtonText,
  DetailsContainer,
  LikesWrapper,
} from './styles';
import { useNavigate } from 'react-router';
import { viewPostRoute } from '../../../../../../../../app/router/routes';
import Button from '@mui/material/Button';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Details = (props) => {
  const navigate = useNavigate();
  const { likes, dislikes, postId, date } = props;

  const onClick = () => {
    navigate({
      pathname: viewPostRoute,
      search: `postId=${postId}`,
    });
  };

  return (
    <Container>
      <DetailsContainer>
        <LikesWrapper>
          <ThumbUpOffAltIcon />
          <Likes color="textSecondary"> {likes} </Likes>
        </LikesWrapper>
        <LikesWrapper>
          <ThumbDownOffAltIcon />
          <Likes color="textSecondary"> {dislikes} </Likes>
        </LikesWrapper>
        <DateIcon />
        <Typography> {date}</Typography>
      </DetailsContainer>
      <Button size="small" onClick={onClick} variant="outlined">
        <ButtonText variant="button" color="inherit">
          Prikaži objavu
        </ButtonText>
      </Button>
    </Container>
  );
};

export default Details;
