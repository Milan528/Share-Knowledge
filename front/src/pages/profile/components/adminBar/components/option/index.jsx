import React, { useState } from 'react';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import Subotion from './components/subOption';
import MainOption from './components/mainOption';

const Option = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    hidden,
    name,
    icon,
    suboptions,
    selectedSuboptions,
    setSelectedSuboptions,
  } = props;

  const handleSuboptionClick = (key) => {
    if (!selectedSuboptions.includes(key))
      setSelectedSuboptions((prev) => [...prev, key]);
    else {
      setSelectedSuboptions((prev) => prev.filter((prevId) => prevId !== key));
    }
  };

  return (
    <List>
      <MainOption
        name={name}
        icon={icon}
        hidden={hidden}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <Collapse in={!collapsed && !hidden} timeout="auto" unmountOnExit>
        {suboptions.map((suboption, index) => (
          <Subotion
            suboption={suboption}
            handleSuboptionClick={handleSuboptionClick}
            key={index}
            selectedSuboptions={selectedSuboptions}
          />
        ))}
      </Collapse>
    </List>
  );
};

export default Option;
