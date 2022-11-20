import React from 'react';
import Viewer from 'react-file-viewer';

const GeneralPurposeReader = (props) => {
  const { file } = props;
  let ext = file.name.split('.')[1];
  let url = URL.createObjectURL(file);

  return <Viewer fileType={ext} filePath={url} />;
};

export default GeneralPurposeReader;
