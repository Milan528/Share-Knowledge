import React, { useRef } from 'react';
import { VideoContainer } from './styles';

export const VideoView = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    var elmnt =
      iframeRef.current.contentWindow.document.getElementsByTagName('video')[0];
    elmnt.style.width = '100%';
    elmnt.style.height = '100%';
    elmnt.style.objectFit = 'fill';
  };

  return (
    <VideoContainer>
      <iframe src={file.src} ref={iframeRef} onLoad={handleIframeLoad} />
    </VideoContainer>
  );
};
