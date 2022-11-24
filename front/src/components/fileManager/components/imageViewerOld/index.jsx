import React from 'react';
import { Container, StyledImageList } from './styles';
import ImageListItem from '@mui/material/ImageListItem';

const ImageViewer = (props) => {
  const { files } = props; //files = [{src: URL.createObjectURL(...), name: "fileName"},...]

  return files.length > 0 ? (
    <Container>
      <StyledImageList cols={2} rowHeight={300}>
        {files.map((file, index) => (
          <ImageListItem key={index}>
            <img src={file.src} alt={`Loading ${file.name}...`} />
          </ImageListItem>
        ))}
      </StyledImageList>
    </Container>
  ) : null;
};

export default ImageViewer;
