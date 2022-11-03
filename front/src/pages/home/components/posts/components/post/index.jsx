import React from "react";
import { StyledPaper } from "./styles";
import Title from "./title";
// import Details from "./details";
// import Tags from "./tags";
// import Text from "./text";
// import Images from "./images";
// import Documents from "./documents";

const Post = (props) => {
  const { data } = props;
  // const { title, type, text, images, documents, tags, likes, id, date } = data;
  const { title, type } = data;

  return (
    <StyledPaper elevation={1}  >

      <Title title={title} type={type} />
    {/*//   <Text text={text} />
    //   <Images images={images} />
    //   <Documents documents={documents} />
    //   <Tags tags={tags} />
    //   <Details likes={likes} postId={id} date={date} />
  // </Paper> */}
    </StyledPaper>
  
  );
};

export default Post;
