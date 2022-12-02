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
import { viewPostRoute } from '../../../../../../../app/router/routes';
import Button from '@mui/material/Button';

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
  const { likes, postId, date, data } = props;

  const onClick = () => {
    // navigate({
    //   pathname: viewPostRoute,
    //   search: `postId=${postId}`,
    // });

    //  navigate(viewPostRoute, {
    //    state: data,
    //  });

    navigate(
      {
        pathname: viewPostRoute,
        search: `postId=${postId}`,
      },
      {
        state: data,
      }
    );
  };

  return (
    <Container>
      <DetailsContainer>
        <ThumbUpIcon />
        <Likes color="textSecondary"> {likes} </Likes>
        <DateIcon />
        <Typography> {dateFormat(date)} </Typography>
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
