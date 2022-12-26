import React from 'react';
import { Container, DetailsContainer, ControllsContainer } from './styles';

import Report from './components/report';
import Delete from './components/delete';
import LikeDislike from './components/likeDislike';

const Details = (props) => {
  const { postId, postedBy, likes, dislikes, likeStatus } = props;

  return (
    <Container>
      <DetailsContainer>
        <LikeDislike
          postId={postId}
          likes={likes}
          dislikes={dislikes}
          likeStatus={likeStatus}
        />
        <ControllsContainer>
          <Delete postId={postId} />
          <Report postId={postId} postedBy={postedBy} />
        </ControllsContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
