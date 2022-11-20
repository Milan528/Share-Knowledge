import React, { useState } from 'react';
// import GeneralPurposeReader from './components/generalPurposeReader';
// import PDFReader from './components/pdfReader';
import FileSelector from './components/fileSelector';
import ImageViewer from './components/imageViewer';
import { fileType } from '../..';

const FileViewer = (props) => {
  const { files, type } = props;

  const getReader = () => {
    if (files.length > 0) {
      if (fileType.img.includes(type)) {
        return <ImageViewer files={files} />;
      } else if (fileType.document.includes(type)) {
        return <FileSelector files={files} />;
      } else {
        return window.alert(
          'File format is not supported. Please reload the page and try again.'
        );
      }
    }
  };

  return getReader();
};

export default FileViewer;
