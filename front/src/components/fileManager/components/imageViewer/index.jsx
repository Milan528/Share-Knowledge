import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Container,
  ControlsContainer,
  DeleteIconContainer,
  Image,
  ImageContainer,
  MinHeightContainer,
  Slide,
  SlidesContainer,
} from './styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';

const ImageViewer = (props) => {
  const { files, setFiles } = props; //files = [{src: URL.createObjectURL(...), name: "fileName"},...]
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    return () => {
      setActiveSlide(0);
    };
  }, [files]);

  const handlePrevClick = () => {
    if (files.length > 1) {
      if (activeSlide > 0) {
        setActiveSlide((prev) => prev - 1);
      } else {
        setActiveSlide(files.length - 1);
      }
    }
  };

  const handleNextClick = () => {
    if (files.length > 1) {
      if (activeSlide < files.length - 1) {
        setActiveSlide((prev) => prev + 1);
      } else {
        setActiveSlide(0);
      }
    }
  };

  const createSlidingImages = (allImages) => {
    const slidingImages = [];
    let first = 0,
      second = 0,
      third = 0;

    if (allImages.length > 2) {
      first = activeSlide === 0 ? allImages.length - 1 : activeSlide - 1;
      second = activeSlide;
      third = activeSlide === allImages.length - 1 ? 0 : activeSlide + 1;
      slidingImages[0] = {
        index: first,
        content: allImages[first],
      };
      slidingImages[1] = {
        index: second,
        content: allImages[second],
      };
      slidingImages[2] = {
        index: third,
        content: allImages[third],
      };
    } else if (allImages.length === 2) {
      slidingImages[0] = {
        index: 0,
        content: allImages[0],
      };
      slidingImages[1] = {
        index: 1,
        content: allImages[1],
      };
    } else {
      slidingImages[0] = {
        index: activeSlide,
        content: allImages[activeSlide],
      };
    }
    return slidingImages;
  };

  const handleSlideClick = (slideIndex) => {
    setActiveSlide(slideIndex);
  };
  return files.length > 0 ? (
    <MinHeightContainer>
      <Container>
        <ImageContainer>
          <Image image={files[activeSlide].src}>
            {' '}
            <DeleteIconContainer>
              <IconButton style={{ backgroundColor: 'white' }}>
                <Delete />
              </IconButton>
            </DeleteIconContainer>
          </Image>
        </ImageContainer>
        <ControlsContainer>
          {files.length > 1 ? (
            <IconButton onClick={handlePrevClick}>
              <ChevronLeftIcon />
            </IconButton>
          ) : null}
          <SlidesContainer>
            {createSlidingImages(files).map((image, index) => {
              return (
                <Slide
                  key={index}
                  image={image.content.src}
                  isSelected={
                    index ===
                    (files.length === 2
                      ? activeSlide
                      : files.length > 1
                      ? 1
                      : 0)
                  }
                  onClick={() => handleSlideClick(image.index)}
                />
              );
            })}
          </SlidesContainer>
          {files.length > 1 ? (
            <IconButton onClick={handleNextClick}>
              <ChevronRightIcon />
            </IconButton>
          ) : null}
        </ControlsContainer>
      </Container>
    </MinHeightContainer>
  ) : null;
};

export default ImageViewer;
