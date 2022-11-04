import React, {useState} from "react";
import Tab from "@mui/material/Tab";
import ThumbDown from "@mui/icons-material/ThumbDown";
import ThumbUp from "@mui/icons-material/ThumbUp";
import HelpIcon from "@mui/icons-material/Help";
import Time from "@mui/icons-material/AccessTime";
import Book from "@mui/icons-material/MenuBook";
import { StyledTabs, Container } from "./styles";


const ScrollableTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <StyledTabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: "#0099feba" } }}
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        >
        <Tab label="Najnovije" icon={<Time />} />
        <Tab label="Pitanja" icon={<HelpIcon />} />
        <Tab label="Materijali" icon={<Book />} />
        <Tab label="Ocena" icon={<ThumbUp />} />
        <Tab label="Ocena" icon={<ThumbDown />} />
      </StyledTabs>
    </Container>
  );
}

export default ScrollableTabs