import React from 'react';
import {
  selectPdf,
  selectWord,
  selectImages,
  selectVideos,
} from '../../../../../../utils/filesSelector';
import { ImageEngine } from './components/image';
import { FileEngine } from './components/file';
import { FileContainer } from './styles';
import { VideoEngine } from './components/video';

export const FileRenderer = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}

  const fileToRender = () => {
    const image = selectImages([file])[0];
    const document = selectWord([file])[0];
    const pdf = selectPdf([file])[0];
    const video = selectVideos([file])[0];

    if (image) {
      return <ImageEngine file={image} />;
    }

    if (document) {
      return <FileEngine file={document} />;
    }

    if (pdf) {
      return <FileEngine file={pdf} />;
    }

    if (video) {
      return <VideoEngine file={video} />;
    }
  };

  return <FileContainer>{fileToRender()}</FileContainer>;
};

export default FileRenderer;
