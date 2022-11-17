import React, { createRef, useState, useEffect } from "react";
import { pdfjs } from "react-pdf";
import CircularProgress from "@mui/material/CircularProgress";
import {PositionContainer, StyledDocument, StyledPage, StyledDivider} from "./styles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = (props) => {
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
      <PositionContainer>
        <StyledDocument
          file={file}
          onLoadSuccess={({ numPages }) => setNumberOfPages(numPages)}
          loading={<CircularProgress />}
        >
          {pages.map((pageNumber) => (
            <StyledPage
              width={width}
              loading=""
              pageNumber={pageNumber}
              key={pageNumber}
            />
          ))}
        </StyledDocument>
        <StyledDivider/>
        <a href={URL.createObjectURL(file)} download>
          Click to download
        </a>
      </PositionContainer>
    </div>
  );
};

export default PDFReader;
