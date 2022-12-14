import React, { useState } from 'react';
import {
  SlidingContainer,
  StyledArrow,
  StyledMenuList,
} from './styles';
import { ToggleButton } from './styles';
import Divider from '@mui/material/Divider';
import {StyledListItemHeaderText, StyledMenuItem} from "./styles"
import { useDispatch } from 'react-redux';
import { setProfileView } from './redux/slices';
import { profileView } from './redux/state';

const SideNavBar = () => {
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch()


  return (
      <SlidingContainer hidden={hidden}>
        <ToggleButton onClick={()=>setHidden(prev => !prev)}>
          <StyledArrow hidden={hidden} />
        </ToggleButton>
        <Divider />
        <StyledMenuList>
          <StyledMenuItem onClick={()=> dispatch(setProfileView(profileView.posts))} hidden={hidden}>
            <StyledListItemHeaderText>
              Objave
            </StyledListItemHeaderText>
          </StyledMenuItem>
          <StyledMenuItem onClick={()=> dispatch(setProfileView(profileView.personalData))} hidden={hidden}>
            <StyledListItemHeaderText>
              Informacije
            </StyledListItemHeaderText>
          </StyledMenuItem>
        </StyledMenuList>
      </SlidingContainer>
  );
};

export default SideNavBar;
