import React, { useState } from 'react';
import {
  FixedContainer,
  SlidingContainer,
  StyledArrow,
  Options,
} from './styles';
import { ToggleButton } from './styles';
import Posts from './components/posts';
import Divider from '@mui/material/Divider';
import Info from './components/info';

const SideNavBar = () => {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <FixedContainer>
      <SlidingContainer hidden={hidden}>
        <ToggleButton onClick={handleClick}>
          <StyledArrow hidden={hidden} />
        </ToggleButton>
        <Divider />
        <Options>
          <Posts hidden={hidden} />
          <Info/>
        </Options>
      </SlidingContainer>
    </FixedContainer>
  );
};

export default SideNavBar;
