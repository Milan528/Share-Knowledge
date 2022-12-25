import React from 'react';
import { StyledText, StyledImg, AttachmentsDiv } from './styles';
import PDF from '../../../../assets/pdf1.png';
import DOCX from '../../../../assets/docx.png';
import Image from '../../../../assets/image.jpg';
import Video from '../../../../assets/video.png';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import DescriptionIcon from '@mui/icons-material/Description';
import { Tooltip } from '@mui/material';

const Content = (props) => {
  const { text, files } = props;

  const selectFileImage = (file) => {
    const ext = file.ext;

    if (ext.includes('.pdf')) return PDF;
    if (ext.includes('.doc')) return DOCX;
    if (ext.includes('.png') || ext.includes('.jpg')) return Image;
    if (ext.includes('.mp4')) return Video;
  };

  const handleClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <>
      <StyledText onClick={handleClick}>{text}</StyledText>
      {/* {files.map((file, index) => (
        <StyledImg
          src={selectFileImage(file)}
          height="30"
          width="30"
          key={index}
        />
      ))} */}
      {files.length > 0 ? (
        <div>
          <Tooltip title="Objava sadrži prilog">
            <AttachmentsDiv>
              <DescriptionIcon
                color="primary"
                style={{ width: '30px', height: '30px' }}
              />
              <p>{files.length}</p>
            </AttachmentsDiv>
          </Tooltip>
        </div>
      ) : null}
    </>
  );
};

export default Content;
