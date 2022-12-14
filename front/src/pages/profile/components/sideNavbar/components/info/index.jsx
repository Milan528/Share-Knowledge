import React from 'react';
import ThumbDown from '@mui/icons-material/ThumbDown';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Time from '@mui/icons-material/AccessTime';
import {StyledListItemHeaderText, StyledMenuItem} from "./styles"
import { MenuList } from '@mui/material';

const Info = (props) => {
  const { hidden } = props;
  
  const handleClick = () => {

  }

  return (
    <MenuList >
      <StyledMenuItem onClick={handleClick} hidden={hidden}>
        <StyledListItemHeaderText>
          Informacije
        </StyledListItemHeaderText>
      </StyledMenuItem>
    </MenuList>
  );
};

export default Info;
