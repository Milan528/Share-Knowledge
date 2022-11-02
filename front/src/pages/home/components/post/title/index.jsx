import React from "react";
import {Container, StyledTypography, StyledBookIcon, StyledHelpIcon} from "./styles";
import HelpIcon from "@mui/icons-material/Help";
import Book from "@mui/icons-material/MenuBook";

const Title = (props) => {
  const { title, type } = props;
  return (
      <Container>
        <StyledTypography>{title}</StyledTypography>
    
         {type === "answer" ? (
           <StyledBookIcon />
           ) : (
          <StyledHelpIcon  />
        )}  
      </Container>
  );
};

export default Title;
