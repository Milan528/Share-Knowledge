import React, { createRef, useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import CircularProgress from "@mui/material/CircularProgress";
import classStyles from "./styles";
import Divider from "@mui/material/Divider";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = (props) => {
  const classes = classStyles();
  const { file } = props;
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [width, setWidth] = useState();
  const [pages, setPages] = useState([]);
  const parentRef = createRef();

  useEffect(() => {
    setWidth(parentRef.current.offsetWidth);
  }, [width, parentRef]);

  useEffect(() => {
    if (numberOfPages !== 0) {
      let pagesArray = [];
      for (let i = 1; i <= numberOfPages; i++) pagesArray.push(i);

      setPages(pagesArray);
    }
  }, [numberOfPages]);

  return (
    <div ref={parentRef}>
      <div className={classes.position}>
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumberOfPages(numPages)}
          loading={<CircularProgress />}
          className={classes.document}
        >
          {pages.map((pageNumber) => (
            <Page
              className={classes.page}
              width={width}
              loading=""
              pageNumber={pageNumber}
              key={pageNumber}
            />
          ))}
        </Document>
        <Divider className={classes.divider} />
        <a href={URL.createObjectURL(file)} download>
          Click to download
        </a>
      </div>
    </div>
  );
};

export default PDFReader;
