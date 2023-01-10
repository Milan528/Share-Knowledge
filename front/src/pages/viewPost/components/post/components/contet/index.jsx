import React, { useEffect, useState } from 'react';
import { StyledText } from './styles';
import { FileViewer } from '../../../../../../components/fileViewer';
import { useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';

const Content = (props) => {
  const { text, files } = props;
  const showAttachmentsForAll = useSelector(
    (state) => state.viewPost.showAttachments
  );
  const [showAttachments, setShowAttachments] = useState(showAttachmentsForAll);

  useEffect(() => {
    setShowAttachments(showAttachmentsForAll);
  }, [showAttachmentsForAll]);

  return (
    <>
      <StyledText>{text}</StyledText>
      {files.length > 0 ? (
        <div>
          Prikazi priloge za ovu objavu
          <Checkbox
            checked={showAttachments}
            onChange={() => setShowAttachments((prev) => !prev)}
          />
        </div>
      ) : null}
      {showAttachments ? (
        <FileViewer
          files={files.map((file) => ({
            src: process.env.REACT_APP_BASE_URL + '/files/' + file.path, //'http://localhost:4000/files/1.png' or .../1.pdf
            name: file.path, //'1.png' or '1.pdf'
          }))}
        />
      ) : null}
    </>
  );
};

export default Content;
