import React, { Fragment } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import classStyles from "./styles";
import ThumbDown from "@mui/icons-material/ThumbDown";
import ThumbUp from "@mui/icons-material/ThumbUp";
import HelpIcon from "@mui/icons-material/Help";
import Time from "@mui/icons-material/AccessTime";
import Book from "@mui/icons-material/MenuBook";

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
