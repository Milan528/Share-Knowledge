import React from 'react';
import { Container, DetailsContainer, ControllsContainer } from './styles';
import Delete from './components/delete';
import LikeDislike from './components/likeDislike';
import Report from './components/report';

const Details = (props) => {
  const { likes, dislikes, commentId, likeStatus, postedBy } = props;

  return (
    <Container>
      <DetailsContainer>
        <LikeDislike
          likes={likes}
          dislikes={dislikes}
          commentId={commentId}
          likeStatus={likeStatus}
        />
        <ControllsContainer>
          <Delete commentId={commentId} />
          <Report commentId={commentId} postedBy={postedBy} />
        </ControllsContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
