import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Container,
  Likes,
  ButtonText,
  DetailsContainer,
  LikesWrapper,
  LikeIcon,
  DislikeIcon,
} from './styles';
import { useNavigate } from 'react-router';
import { viewPostRoute } from '../../../../../../../../app/router/routes';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const Details = (props) => {
  const navigate = useNavigate();
  const { likes, dislikes, postId, date } = props;

  const currentPage = useSelector((state) => state.home.currentPage);
  const postPerPage = useSelector((state) => state.home.postPerPage);

  const {
    tags: { selectedTags },
    posts: { posts },
    ...homepageFilters
  } = useSelector((state) => state.home);

  const onClick = () => {
    const selectedPostIndex =
      posts.findIndex((post) => post.id === postId) +
      (currentPage - 1) * postPerPage;

    navigate(
      {
        pathname: viewPostRoute,
        search: `postId=${postId}`,
      },
      {
        state: {
          homepageFilters: {
            ...homepageFilters,
            selectedTags,
          },
          selectedPostIndex,
        },
      }
    );
  };

  return (
    <Container>
      <DetailsContainer>
        <LikesWrapper>
          <LikeIcon />
          <Likes color="textSecondary"> {likes} </Likes>
        </LikesWrapper>
        <LikesWrapper>
          <DislikeIcon />
          <Likes color="textSecondary"> {dislikes} </Likes>
        </LikesWrapper>
      </DetailsContainer>
      <Button size="small" onClick={onClick} variant="outlined">
        <ButtonText variant="button" color="inherit">
          Prikaži objavu-
        </ButtonText>
      </Button>
    </Container>
  );
};

export default Details;
