import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Container,
  Likes,
  DateIcon,
  ButtonText,
  DetailsContainer,
  LikesWrapper,
  LikeIcon,
  DislikeIcon,
} from './styles';
import { useNavigate } from 'react-router';
import {
  profileRoute,
  viewPostRoute,
} from '../../../../../../../../app/router/routes';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Details = (props) => {
  const navigate = useNavigate();
  const { likes, dislikes, postId, date, postedBy } = props;

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

  const handleVisitUserProfile = () => {
    navigate({
      pathname: profileRoute,
      search: `username=${postedBy}`,
    });
  };

  return (
    <Container>
      <DetailsContainer>
        <LikesWrapper>
          <LikeIcon />
          {/* <ThumbUpOffAltIcon /> */}
          <Likes color="textSecondary"> {likes} </Likes>
        </LikesWrapper>
        <LikesWrapper>
          <DislikeIcon />
          {/* <ThumbDownOffAltIcon /> */}
          <Likes color="textSecondary"> {dislikes} </Likes>
        </LikesWrapper>
        <Button onClick={handleVisitUserProfile}>
          <AccountCircleIcon />
          {postedBy}
        </Button>
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
