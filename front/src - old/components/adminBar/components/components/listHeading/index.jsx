import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import classStyles from "./styles";
import Typography from "@mui/material/Typography";

const Heading = (props) => {
  const classes = classStyles();
  const [open, setOpen] = useState(false);
  const { hideLeftBar, name, icon } = props;

  return (
    <List className={classes.list}>
      <ListItem
        button
        onClick={() => {
          if (!hideLeftBar) setOpen(!open);
        }}
        className={classes.arrowColor}
      >
        {open && !hideLeftBar ? <ExpandLess /> : <ExpandMore />}
        <ListItemText
          disableTypography
          primary={
            <Typography type="body2" className={classes.textColor}>
              {name}{" "}
            </Typography>
          }
        />
        <ListItemIcon className={classes.buttonColor}>{icon}</ListItemIcon>
      </ListItem>
      <Collapse in={open && !hideLeftBar} timeout="auto" unmountOnExit>
        {props.children}
      </Collapse>
    </List>
  );
};

export default Heading;
