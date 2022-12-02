import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Likes, DateIcon, DetailsContainer, LikesContainer, DateContainer } from './styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from 'react-router';

const dateFormat = (date) => {
  let splitedDate = date.split('-');
  const day = splitedDate[0];
  const month = splitedDate[1];
  const year = splitedDate[2];
  let formatedDate = `${day}.${month}.${year}`;
  return formatedDate;
};

const Details = (props) => {
  const navigate = useNavigate();
  const { likes, postId, date } = props;

  return (
    <Container>
      <DetailsContainer>
        <LikesContainer>
          <ThumbUpIcon />
          <Likes color="textSecondary"> {likes} </Likes>
        </LikesContainer>
        <DateContainer>
          <DateIcon />
          <Typography> {dateFormat(date)} </Typography>
        </DateContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
