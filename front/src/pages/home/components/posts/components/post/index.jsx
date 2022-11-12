import React from 'react';
import { StyledPaper } from './styles';
import Title from './title';
import Content from './contet';
// import Details from "./details";
// import Tags from "./tags";
// import Documents from "./documents";

const Post = (props) => {
  const { data } = props;
  console.log(data);
  // const { title, type, text, images, documents, tags, likes, id, date } = data;
  const { title, type, text } = data;

  return (
    <StyledPaper elevation={1}>
      <Title title={title} type={type} />
      <Content text={text} images={[]} />
      {/*//   <Images images={images} />
    //   <Documents documents={documents} />
    //   <Tags tags={tags} />
    //   <Details likes={likes} postId={id} date={date} />
    */}
    </StyledPaper>
  );
};

export default Post;
