import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, MinHeightContainer } from './styles';

import FileViewer from './components/fileViewer';
import FileSwitcher from './components/fileSwitcher';

const ImageViewer = (props) => {
  const { files } = props; //files = [{src: URL.createObjectURL(...), name: "fileName"},...]
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    return () => {
      setActiveSlide(0);
    };
  }, [files]);

  return files.length > 0 ? (
    <MinHeightContainer>
      <Container>
        <FileViewer file={files[activeSlide]} />
        <FileSwitcher
          files={files}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </Container>
    </MinHeightContainer>
  ) : null;
};

export default ImageViewer;
