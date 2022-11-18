import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { StyledListItemIcon } from "./styles";

const Heading = (props) => {
  const [open, setOpen] = useState(false);
  const { hideLeftBar, name, icon } = props;

  return (
    <List>
      <ListItem
        button
        onClick={() => {
          if (!hideLeftBar) setOpen(!open);
        }}
      >
        {open && !hideLeftBar ? <ExpandLess /> : <ExpandMore />}
        <ListItemText
          disableTypography
          primary={
            <Typography type="body2">
              {name}{" "}
            </Typography>
          }
        />
        <StyledListItemIcon>{icon}</StyledListItemIcon>
      </ListItem>
      <Collapse in={open && !hideLeftBar} timeout="auto" unmountOnExit>
        {props.children}
      </Collapse>
    </List>
  );
};

export default Heading;
