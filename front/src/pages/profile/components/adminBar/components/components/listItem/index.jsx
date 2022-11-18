import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

const Item = (props) => {
  const { name, notify, checked } = props;

  return (
    <List component="div" disablePadding onClick={notify}>
      <ListItem button>
        <ListItemIcon>
          <Checkbox
            checked={checked}
            color="default"
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body2">
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
