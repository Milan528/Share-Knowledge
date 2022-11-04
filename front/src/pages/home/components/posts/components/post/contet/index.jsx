import React from "react";
import { StyledText, StyledImg } from "./styles"

const Content = (props) => {
  const { text, images } = props;

  return (
    <>
      <StyledText>{text}</StyledText>
     { 
      images.length >= 0 ?
            images.map((image, index) => (
              <StyledImg 
              src={image} 
              alt="Smiley face" 
              height="70" 
              width="70" 
              key={index}
              />
            ))
          :
          null
    }
    </>
  );
};

export default Content;
