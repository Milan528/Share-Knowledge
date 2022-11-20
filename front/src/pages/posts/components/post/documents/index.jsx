import React, { Fragment } from 'react';
import FileViewer from "../../../../../components/fileViewer"
import { useSelector } from "react-redux"

const Post = () => {
  const { documents } = useSelector(state => state.post);

  return (
    <Fragment>
      {documents.length > 0 ? <FileViewer files={documents}/> : null}
    </Fragment>
  );
}

export default Post;