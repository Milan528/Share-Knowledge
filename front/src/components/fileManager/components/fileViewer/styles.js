import styled from 'styled-components';
import Viewer from 'react-file-viewer';

export const Link = styled.a`
  text-decoration: underline;
  color: #0000ee;
  margin-left: 10px;
  cursor: pointer;
`;

export const FileContainer = styled.div`
  max-height: 500px;
  overflow: overlay;
`;
