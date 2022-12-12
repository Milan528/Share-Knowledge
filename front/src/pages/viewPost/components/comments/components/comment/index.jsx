import React from 'react';
import { StyledPaper } from './styles';
import Content from './contet';
import Details from './details';

const Comment = (props) => {
  const { data } = props;
  const { text, files, likes, dislikes, id, date } = data;

  return (
    <StyledPaper elevation={1}>
      <Content text={text} files={files} />
      <Details likes={likes} postId={id} date={date} dislikes={dislikes}/>
    </StyledPaper>
  );
};

export default Comment;
