import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import ThumbDown from '@mui/icons-material/ThumbDown';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Time from '@mui/icons-material/AccessTime';
import { OrdersContainer } from './styles';
import Tabs from '@mui/material/Tabs';

const ScrollableTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <OrdersContainer>
      {/* eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
      <Tabs
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
      </Tabs>
    </OrdersContainer>
  );
};

export default ScrollableTabs;
