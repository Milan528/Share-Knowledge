import React from 'react';
import { StyledPaper } from './styles';
import Content from './contet';
import Details from './details';

const Comment = (props) => {
  const { data } = props;
  const { text, files, likes, dislikes, id, date, likeStatus } = data;

  return (
    <StyledPaper elevation={1}>
      <Content text={text} files={files} />
      <Details
        likes={likes}
        commentId={id}
        date={date}
        dislikes={dislikes}
        likeStatus={likeStatus}
      />
    </StyledPaper>
  );
};

export default Comment;
