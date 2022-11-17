import React, { useState } from 'react';
import GeneralPurposeReader from './components/generalPurposeReader';
import PDFReader from './components/pdfReader';
import FileSelector from './components/fileSelector';
import ImageViewer from './components/imageViewer';
import { fileType } from '../..';

const FileViewer = (props) => {
  const { files, type } = props;
  const [selectedFile, setSelectedFile] = useState(null);

  const fileExtension = (file) => {
    let filename = file.name.split('.');
    return filename[1];
  };

  const getReader = () => {
    if (files.length > 0) {
      if (type === fileType.img) {
        return <ImageViewer files={files} />;
      } else if (type === fileType.document) {
        return (
          <>
            <FileSelector files={files} setSelectedFile={setSelectedFile} />
            {selectedFile ? (
              fileExtension(selectedFile) === 'pdf' ? (
                <PDFReader file={selectedFile} />
              ) : (
                <GeneralPurposeReader file={selectedFile} />
              )
            ) : null}
          </>
        );
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
