import React from 'react';
import { StyledPaper } from './styles';
import Title from './title';
import Content from './contet';
import Details from './details';
import Tags from './tags';

const Post = (props) => {
  const { data } = props;
  const { title, type, text, files, tags, likes, id, date } = data;

  return (
    <StyledPaper elevation={1}>
      <Title title={title} type={type} />
      <Content text={text} files={files} />
      <Tags tags={tags} />
      <Details likes={likes} postId={id} date={date} />
    </StyledPaper>
  );
};

export default Post;
