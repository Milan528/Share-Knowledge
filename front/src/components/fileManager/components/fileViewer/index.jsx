import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Link, MinHeightContainer } from './styles';
import ViewEngineSwitcher from './components/viewEngineSwitcher';
import SlidePreviewSwitcher from './components/slidePreviewSwitcher';

const FileViewer = (props) => {
  const { files } = props; //files = [{src: URL.createObjectURL(...), name: "fileName"},...]
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  useEffect(() => {
    return () => {
      setActiveFileIndex(0);
    };
  }, [files]);

  return files.length > 0 ? (
    <MinHeightContainer>
      <Container>
        <ViewEngineSwitcher file={files[activeFileIndex]} />
        <SlidePreviewSwitcher
          files={files}
          activeFileIndex={activeFileIndex}
          setActiveFileIndex={setActiveFileIndex}
        />
        <div>
          <a href={files[activeFileIndex].src} download>
            Click to download
          </a>
          <Link onClick={() => window.open(files[activeFileIndex].src)}>
            Open file in new tab
          </Link>
        </div>
      </Container>
    </MinHeightContainer>
  ) : null;
};

export default FileViewer;
