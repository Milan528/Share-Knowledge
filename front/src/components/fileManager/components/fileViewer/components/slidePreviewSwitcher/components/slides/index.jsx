import React from 'react';
import { Slide } from './styles';
import PDF from '../../../../../../../../assets/pdf1.png';
import DOCX from '../../../../../../../../assets/docx.png';
import Video from '../../../../../../../../assets/video.png';
import {
  selectPdf,
  selectWord,
  selectImages,
  selectVideos,
} from '../../../../../../../../utils/filesSelector';

export const Slides = ({ files, activeFileIndex, setActiveFileIndex }) => {
  const createSlidingImages = (files) => {
    const slidingImages = [];
    let first = 0,
      second = 0,
      third = 0;

    if (files.length > 2) {
      first = activeFileIndex === 0 ? files.length - 1 : activeFileIndex - 1;
      second = activeFileIndex;
      third = activeFileIndex === files.length - 1 ? 0 : activeFileIndex + 1;

      slidingImages[0] = {
        index: first,
        content: files[first],
      };
      slidingImages[1] = {
        index: second,
        content: files[second],
      };
      slidingImages[2] = {
        index: third,
        content: files[third],
      };
    } else if (files.length === 2) {
      slidingImages[0] = {
        index: 0,
        content: files[0],
      };
      slidingImages[1] = {
        index: 1,
        content: files[1],
      };
    } else {
      slidingImages[0] = {
        index: activeFileIndex,
        content: files[activeFileIndex],
      };
    }
    return slidingImages;
  };

  const slidingImage = (file) => {
    const image = selectImages([file])[0];
    const document = selectWord([file])[0];
    const pdf = selectPdf([file])[0];
    const video = selectVideos([file])[0];

    if (image) return image.src;

    if (document) return DOCX;

    if (pdf) return PDF;

    if (video) return Video;
  };

  return createSlidingImages(files).map((file, index) => (
    <Slide
      key={index}
      image={slidingImage(file.content)}
      isSelected={
        index ===
        (files.length === 2 ? activeFileIndex : files.length > 1 ? 1 : 0)
      }
      onClick={() => setActiveFileIndex(file.index)}
    />
  ));
};

export default Slides;
