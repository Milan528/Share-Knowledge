import React, { useEffect, useState } from 'react';
import { StyledText, StyledImg } from './styles';
import PDF from '../../../../../assets/pdf1.png';
import DOCX from '../../../../../assets/docx.png';
import Image from '../../../../../assets/image.jpg';
import fileServices from '../../../../../services/fileServices';
import { useDispatch, useSelector } from 'react-redux';
import { loadFiles } from '../../../reduxThunk/actions';
import { FileViewer, fileType } from '../../../../../components/fileManager';
import { setFiles } from '../../../redux/slices';

const Content = (props) => {
  const { text, files } = props;
  const dispatch = useDispatch();

  console.log(files);

  const images = () => {
    const checkIfImage = (file) => {
      const ext = file.ext;
      if (ext.includes('.png') || ext.includes('.jpg')) return true;
      else return false;
    };

    const imgs = files.filter((file) => checkIfImage(file));

    return imgs;
  };

  const filesSrc = (filess) => {
    const filesSrc = filess.map(
      (file) => process.env.REACT_APP_BASE_URL + '/files/' + file.path
    );

    return filesSrc;
  };

  const otherFiles = () => {
    return files.filter(
      (file) => file !== images().find((img) => img.id === file.id)
    );
  };

  console.log(filesSrc(otherFiles()));

  return (
    <>
      <StyledText>{text}</StyledText>
      <FileViewer files={filesSrc(images())} type={fileType.img} />
      <FileViewer files={filesSrc(otherFiles())} type={fileType.document} />
    </>
  );
};

export default Content;
