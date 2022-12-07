import Button from '@mui/material/Button';
import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0px;

  iframe {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    height: 100%;
    width: 100%;
  }
`;

export const Link = styled.a`
  text-decoration: underline;
  color: #0000ee;
  margin-left: 10px;
  cursor: pointer;
`;
