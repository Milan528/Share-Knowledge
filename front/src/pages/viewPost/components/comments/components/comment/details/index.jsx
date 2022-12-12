import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Container,
  Likes,
  DateIcon,
  DetailsContainer,
  DateContainer,
  StyledButton,
} from './styles';
import ThumbUp from '@mui/icons-material/ThumbUp';
import ThumbDown from '@mui/icons-material/ThumbDown';
// import { useNavigate } from 'react-router';

const dateFormat = (date) => {
  let splitedDate = date.split('-');
  const day = splitedDate[0];
  const month = splitedDate[1];
  const year = splitedDate[2];
  let formatedDate = `${day}.${month}.${year}`;
  return formatedDate;
};

const Details = (props) => {
  // const navigate = useNavigate();
  const { likes, date } = props;
  // const { postId } = props;

  return (
    <Container>
      <DetailsContainer>
        <StyledButton>
          <ThumbUp />
          <Likes color="textSecondary"> {likes} </Likes>
        </StyledButton>
        <StyledButton color="primary">
          <ThumbDown />
          <Likes color="textSecondary"> {likes} </Likes>
        </StyledButton>
        <DateContainer>
          <DateIcon />
          <Typography> {dateFormat(date)} </Typography>
        </DateContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
