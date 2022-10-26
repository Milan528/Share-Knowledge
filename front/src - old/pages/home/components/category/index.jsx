import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import classStyles from "./styles";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import HelpIcon from "@material-ui/icons/Help";
import Time from "@material-ui/icons/AccessTime";
import Book from "@material-ui/icons/MenuBook";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);
  const classes = classStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { backgroundColor: "#0099feba" } }}
          textColor="inherit"
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab label="Najnovije" icon={<Time />} />
          <Tab label="Pitanja" icon={<HelpIcon />} />
          <Tab label="Materijali" icon={<Book />} />
          <Tab label="Ocena" icon={<ThumbUp />} />
          <Tab label="Ocena" icon={<ThumbDown />} />
        </Tabs>
      </div>
      <Divider className={classes.divider} />
    </Fragment>
  );
}
