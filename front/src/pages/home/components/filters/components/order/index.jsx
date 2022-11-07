import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import ThumbDown from '@mui/icons-material/ThumbDown';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Time from '@mui/icons-material/AccessTime';
import { StyledTabs } from './styles';

const ScrollableTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledTabs
      value={value}
      onChange={handleChange}
      TabIndicatorProps={{ style: { backgroundColor: '#0099feba' } }}
      textColor="inherit"
      variant="scrollable"
      scrollButtons="auto"
    >
      <Tab label="Najnovije" icon={<Time />} />
      <Tab label="Ocena" icon={<ThumbUp />} />
      <Tab label="Ocena" icon={<ThumbDown />} />
    </StyledTabs>
  );
};

export default ScrollableTabs;
