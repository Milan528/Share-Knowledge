import React from "react";
import {Container, StyledImageList} from "./styles";
import ImageListItem from "@mui/material/ImageListItem";

const Post = (props) => {
  const { files } = props;

  return files.length > 0 ?
  (
    <Container>
      <StyledImageList cols={2} rowHeight={300}>
        {files.map((image, index) => (
          <ImageListItem key={index}>
            <img src={URL.createObjectURL(image)} alt={"loading..."} />
          </ImageListItem>
        ))}
      </StyledImageList>
    </Container>
  )
  :
  null 
};

export default Post;
