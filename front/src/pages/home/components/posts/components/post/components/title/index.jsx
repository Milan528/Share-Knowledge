import React from "react";
import {Container, StyledTypography, StyledBookIcon, StyledHelpIcon} from "./styles";
import Tooltip from '@mui/material/Tooltip';

const Title = (props) => {
  const { title, type } = props;
  return (
      <Container>
        <StyledTypography>{title}</StyledTypography>
    
         {type === "material" ? (
            <Tooltip title="Materijal">
              <StyledBookIcon />
            </Tooltip>
           ) : (
            <Tooltip title="Pitanje">
              <StyledHelpIcon  />
            </Tooltip>
        )}  
      </Container>
  );
};

export default Title;
