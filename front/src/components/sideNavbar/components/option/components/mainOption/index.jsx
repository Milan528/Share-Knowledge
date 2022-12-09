import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { StyledListItemIcon } from './styles';

const MainOption = (props) => {
  const { hidden, name, icon, collapsed, setCollapsed } = props;

  return (
    <ListItem
      button
      onClick={() => {
        if (!hidden) setCollapsed(!collapsed);
      }}
    >
      {!collapsed && !hidden ? <ExpandLess /> : <ExpandMore />}
      <ListItemText disableTypography>
        <Typography type="body2">{name}</Typography>
      </ListItemText>
      <StyledListItemIcon>{icon}</StyledListItemIcon>
    </ListItem>
  );
};

export default MainOption;
