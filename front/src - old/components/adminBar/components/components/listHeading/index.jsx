import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import classStyles from "./styles";
import Typography from "@material-ui/core/Typography";

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
