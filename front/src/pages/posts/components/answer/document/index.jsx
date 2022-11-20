import React, { Fragment } from 'react';
// import classStyles from './styles';
import FileViewer from "../../../../../components/fileViewer"
import PDFFile from "../../../../../assets/uputstvo.pdf";

const Post = () => {
  // const classes = classStyles();

  // <a href={this.props.url} download>Click to download</a>
  // const url = URL.createObjectURL(file)
    let file = new File([PDFFile], "uputstvo.pdf"); 
    let documents = []
    documents.push(file)
  return (
    <Fragment>
      <FileViewer files={documents}/>
    </Fragment>
  );
}

export default Post;