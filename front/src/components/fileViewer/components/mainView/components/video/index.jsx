import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { VideoContainer } from './styles';

export const VideoView = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadVideoFile = async () => {
      if (file.src.split(':')[0] !== 'blob') {
        const res = await axios(file.src, {
          responseType: 'blob',
        });
        let blob = res.data;

        setVideoFile(URL.createObjectURL(blob));
      } else {
        setVideoFile(file.src);
      }
    };

    loadVideoFile();
  }, [file]);

  if (videoFile)
    return (
      <VideoContainer>
        <video controls>
          <source src={videoFile} type="video/mp4" />
        </video>
      </VideoContainer>
    );
  else return <h1>no video file</h1>;
};
