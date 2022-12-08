import React from 'react';
import { StyledText, StyledImg } from './styles';
import PDF from '../../../../../../../../assets/pdf1.png';
import DOCX from '../../../../../../../../assets/docx.png';
import Image from '../../../../../../../../assets/image.jpg';
import Video from '../../../../../../../../assets/video.png';

const Content = (props) => {
  const { text, files } = props;

  const selectFileImage = (file) => {
    const ext = file.ext;

    if (ext.includes('.pdf')) return PDF;
    if (ext.includes('.doc')) return DOCX;
    if (ext.includes('.png') || ext.includes('.jpg')) return Image;
    if (ext.includes('.mp4')) return Video;
  };

  return (
    <>
      <StyledText>{text}</StyledText>
      {files.map((file, index) => (
        <StyledImg
          src={selectFileImage(file)}
          height="30"
          width="30"
          key={index}
        />
      ))}
    </>
  );
};

export default Content;
