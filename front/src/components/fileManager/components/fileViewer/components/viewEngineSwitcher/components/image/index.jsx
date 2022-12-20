import React from 'react';
import { Image } from './styles';

export const ImageEngine = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}

  return (
    <Image>
      <img src={file.src} />
    </Image>
  );
};
