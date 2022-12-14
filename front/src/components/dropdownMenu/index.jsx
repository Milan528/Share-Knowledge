import React, { useState, useEffect } from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import ThumbDown from '@mui/icons-material/ThumbDown';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Time from '@mui/icons-material/AccessTime';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {StyledListItemHeaderText, StyledListItemText, StyledMenuItem} from "./styles"

export const options = [
  { key: 0, name: 'Najnovije', icon: <Time/> },
  { key: 1, name: 'Ocena', icon: <ThumbUp/> },
  { key: 2, name: 'Ocena', icon: <ThumbDown/> },
];

const DrowdownMenu = (props) => {
  const { hidden } = props;
  const [collapsed, setCollapsed] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    if(selectedOption){
      console.log(selectedOption)
    }
  }, [selectedOption])

  return (
    <MenuList>
      <StyledMenuItem onClick={() => !hidden ? setCollapsed(prev => !prev) : null} hidden={hidden}>
        <StyledListItemHeaderText>
          Objave
        </StyledListItemHeaderText>
        {!collapsed && !hidden ? <ExpandLess /> : <ExpandMore />}
      </StyledMenuItem>
      <Collapse in={!collapsed && !hidden} timeout="auto" unmountOnExit>
        <MenuList
          disablePadding
        >
        {options.map((option) => (
            <MenuItem onClick={() => setSelectedOption(option)} key={option.key}>
              <StyledListItemText>{option.name}</StyledListItemText>
              <ListItemIcon>{option.icon} </ListItemIcon>
            </MenuItem>
        ))}
        </MenuList>
    </Collapse>
    </MenuList>
  );
};

export default DrowdownMenu;
