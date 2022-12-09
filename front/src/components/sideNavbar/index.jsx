import React, { useState } from 'react';
import {
  FixedContainer,
  SlidingContainer,
  StyledArrow,
  Options,
} from './styles';
import { ToggleButton } from './styles';
import Year from './components/year';
import Department from './components/department';
import Divider from '@mui/material/Divider';

const LeftBar = () => {
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
          <Year hidden={hidden} />
          <Department hidden={hidden} />
        </Options>
      </SlidingContainer>
    </FixedContainer>
  );
};

export default LeftBar;
