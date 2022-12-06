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
  const currentPage = useSelector((state) => state.home.state.currentPage);
  const postPerPage = useSelector((state) => state.home.state.postPerPage);
  const { posts } = postsState;

  //  home: {
  //     tags: { selectedTags },
  //     state: { type, search, currentPage, postPerPage },
  //   },
  // } = getState();

  // let tagsId = selectedTags.map((tag) => tag.id);
  // let dto = {
  //   tags: tagsId,
  //   startIndex: (currentPage - 1) * postPerPage,
  //   count: postPerPage,
  //   search,
  //   type,
  // };

  const onClick = () => {
    const postIndex =
      posts.findIndex((post) => post.id === postId) +
      (currentPage - 1) * postPerPage;

    navigate(
      {
        pathname: viewPostRoute,
        search: `postId=${postId}`,
      },
      {
        state: {
          postsIds: posts.map((post) => post.id),
          postIndex,
        },
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
