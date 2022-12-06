import React from 'react';
import { VideoContainer } from './styles';

const VideoViewer = () => {

  let src = "https://www.youtube.com/embed/mRqKHjh2Alo"
  // let src="https://www.youtube.com/embed/tgbNymZ7vqY">

  return (
  <VideoContainer>

  <iframe width="420" height="345" src={src.replace("watch?v=", "embed/")}/>

  </VideoContainer>
  )
};

export default VideoViewer;