import React from 'react';
import { StyledText, ContentContainer } from './styles';
import {
  FileViewer,
  ImageViewer,
  VideoViewer
} from '../../../../../../../components/fileManager';
import { FilesSelector } from '../../../../../../../utils/filesSelector';

const Content = (props) => {
  const { text, files } = props;

  return (
    <ContentContainer>
      <StyledText>{text}</StyledText>
      <ImageViewer
        files={FilesSelector.selectImages(files).map((image) => ({
          src: process.env.REACT_APP_BASE_URL + '/files/' + image.path, //'http://localhost:4000/files/1.png'
          name: image.path, //'1.png'
        }))}
      />
      <FileViewer
        files={FilesSelector.selectDocuments(files).map((document) => ({
          src: process.env.REACT_APP_BASE_URL + '/files/' + document.path, //'http://localhost:4000/files/1.pdf'
          name: document.path, //'1.pdf'
        }))}
      />
      <VideoViewer
        files={FilesSelector.selectVideos(files).map((document) => ({
          src: process.env.REACT_APP_BASE_URL + '/files/' + document.path, //'http://localhost:4000/files/1.mp4'
          name: document.path, //'1.mp4'
        }))}
      />
    </ContentContainer>
  );
};

export default Content;
