import React from 'react';
import { Container, DetailsContainer, ControllsContainer } from './styles';
import LikeDislike from './components/likeDislike';
import { Button } from '@mui/material';

const Details = (props) => {
  const { likes, dislikes } = props;

  return (
    <Container>
      <DetailsContainer>
        <LikeDislike likes={likes} dislikes={dislikes} />
        <ControllsContainer>
          <Button variant="outlined">Prikaži objavu</Button>
        </ControllsContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
