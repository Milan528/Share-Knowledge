import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Container,
  Likes,
  DateIcon,
  ButtonText,
  DetailsContainer,
} from './styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from 'react-router';
import { viewPostRoute } from '../../../../../../../../app/router/routes';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const Details = (props) => {
  const navigate = useNavigate();
  const { likes, postId, date } = props;
  const postsState = useSelector((state) => state.home.posts);
  const { posts } = postsState;

  const onClick = () => {
    navigate(
      {
        pathname: viewPostRoute,
        search: `postId=${postId}`,
      },
      {
        state: posts.map((post) => post.id),
      }
    );
  };

  return (
    <Container>
      <DetailsContainer>
        <ThumbUpIcon />
        <Likes color="textSecondary"> {likes} </Likes>
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
