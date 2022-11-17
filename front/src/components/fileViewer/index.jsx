import React, { useState } from "react";
import GeneralPurposeReader from "./components/generalPurposeReader";
import PDFReader from "./components/pdfReader";
import FileSelector from "./components/fileSelector";
import ImageViewer from "./components/imageViewer"

export const fileType = {
  img: '.jpg, .png',
  document: ".pdf, .doc*",
}

const FileViewer = (props) => {
  const { files, type } = props;
  const [selectedFile, setSelectedFile] = useState(null);

  const fileExtension = (file) => {
    let filename = file.name.split(".");
    return filename[1];
  };

  const getFileReader = () => {
    if(fileExtension(selectedFile) === "pdf"){
      return <PDFReader file={selectedFile} />
    }else{
      return <GeneralPurposeReader file={selectedFile} />
    }
  }

  const getReader = () => {
    if(files.length>0){
      console.log(type===fileType.document)
      if(type===fileType.img){
        return <ImageViewer files={files}/>
      }
      else if(type===fileType.document){
        return(
          <>
            <FileSelector files={files} setSelectedFile={setSelectedFile}/>
            {selectedFile ? getFileReader() : null }
          </>
        )
      }
      else{
        return window.alert("File format is not supported. Reload page and try again.")
      }
    }
  }

  return getReader()
};

export default FileViewer;
