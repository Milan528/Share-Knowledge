import React from 'react';
import ThumbDown from '@mui/icons-material/ThumbDown';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Time from '@mui/icons-material/AccessTime';
import {StyledListItemHeaderText, StyledMenuItem} from "./styles"
import { MenuList } from '@mui/material';


export const options = [
  { key: 0, name: 'Najnovije', icon: <Time/> },
  { key: 1, name: 'Ocena', icon: <ThumbUp/> },
  { key: 2, name: 'Ocena', icon: <ThumbDown/> },
];

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
