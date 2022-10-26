import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import classStyles from "./styles";
import Typography from "@material-ui/core/Typography";

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
