import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import classStyles from "./styles";
import Typography from "@mui/material/Typography";

const Item = (props) => {
  const { name, notify, checked } = props;
  const classes = classStyles(checked);

  return (
    <List component="div" disablePadding onClick={notify}>
      <ListItem button className={classes.nested}>
        <ListItemIcon>
          <Checkbox
            checked={checked}
            classes={{ root: classes.colorCondition }}
            color="default"
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body2" className={classes.textColor}>
              {name}
            </Typography>
          }
          disableTypography
        />
      </ListItem>
    </List>
  );
};

export default Item;
