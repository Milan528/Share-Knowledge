import React from 'react';
import {
  FilesSelector,
  getFileExtensionFromFileName,
} from '../../../../../../utils/filesSelector';
import { Image, ImageContainer } from './styles';

export const FileViewer = ({ file }) => {
  const fileToRender = () => {
    file.ext = getFileExtensionFromFileName(file.name);

    const images = FilesSelector.selectImages([file]);
    const documents = FilesSelector.selectDocuments([file]);
    const video = FilesSelector.selectVideos([file]);

    if (images.length > 0) {
      return <img src={file.src} />;
    }
  };

  return (
    <ImageContainer>
      <Image>{fileToRender()}</Image>
    </ImageContainer>
  );
};

export default FileViewer;
