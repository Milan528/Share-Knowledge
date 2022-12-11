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
import { useSelector } from 'react-redux';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Details = (props) => {
  const navigate = useNavigate();
  const { likes, postId, date } = props;

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
          <ThumbUpOffAltIcon />
          <Likes color="textSecondary"> {likes} </Likes>
        </LikesWrapper>
        <LikesWrapper>
          <ThumbDownOffAltIcon />
          <Likes color="textSecondary"> -1 </Likes>
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
