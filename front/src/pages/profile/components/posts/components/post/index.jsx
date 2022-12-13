import React from 'react';
import { StyledPaper } from './styles';
import Title from './components/title';
import Content from './components/contet';
import Details from './components/details';
import Tags from './components/tags';

const Post = (props) => {
  const { data } = props;
  const { title, type, text, files, tags, likes, dislikes, id, date } = data;

  return (
    <StyledPaper elevation={1}>
      <Title title={title} type={type} />
      <Content text={text} files={files} />
      <Tags tags={tags} />
      <Details likes={likes} postId={id} date={date} data={data} dislikes={dislikes}/>
    </StyledPaper>
  );
};

export default Post;
