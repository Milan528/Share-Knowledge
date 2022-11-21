import React, { useEffect, useState } from 'react';
import { StyledText, StyledImg } from './styles';
import { useDispatch, useSelector } from 'react-redux';
// import { FileViewer, fileType } from '../../../../../components/fileManager';
import { FileViewer, ImageViewer } from '../../../../../components/fileManager';

const Content = (props) => {
  const { text, files } = props;
  const dispatch = useDispatch();

  console.log(files);

  const images = (files) => {
    const imgs = files.filter(
      (file) => file.ext.includes('.png') || file.ext.includes('.jpg')
    );

    return imgs;
  };

  const documents = (files) => {
    return files.filter(
      (file) => file !== images(files).find((img) => img.id === file.id)
    );
  };

  console.log(
    images(files).map((image) => ({
      src: process.env.REACT_APP_BASE_URL + '/files/' + image.path,
      name: image.path,
    }))
  );

  return (
    <>
      <StyledText>{text}</StyledText>
      <ImageViewer
        files={images(files).map((image) => ({
          src: process.env.REACT_APP_BASE_URL + '/files/' + image.path, //'http://localhost:4000/files/1.png'
          name: image.path, //'1.png'
        }))}
      />
      <FileViewer
        files={documents(files).map((document) => ({
          src: process.env.REACT_APP_BASE_URL + '/files/' + document.path, //'http://localhost:4000/files/1.pdf'
          name: document.path, //'1.pdf'
        }))}
      />
    </>
  );
};

export default Content;
