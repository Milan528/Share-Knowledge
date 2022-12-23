import React, { useState } from 'react';
import {
  Container,
  OptionsContainer,
  SlidingContainer,
  StyledArrow,
  StyledMenuList,
  ToggleContainer,
} from './styles';
import { StyledListItemHeaderText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileView } from './redux/slices';
import { profileView } from './redux/state';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { tagsRoute, usersRoute } from '../../../../app/router/routes';
import { userRole } from '../../../../utils/enums';
import { Divider, MenuItem } from '@mui/material';

const SideNavBar = () => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const usernameUrl = searchParams.get('username');
  const username = useSelector((state) => state.app.username);
  const role = useSelector((state) => state.app.role);

  return (
    <SlidingContainer hidden={hidden}>
      <OptionsContainer>
        Kontole
        <Divider />
        <StyledMenuList>
          <MenuItem onClick={() => dispatch(setProfileView(profileView.posts))}>
            <StyledListItemHeaderText>Objave</StyledListItemHeaderText>
          </MenuItem>
          {usernameUrl === username ? (
            <MenuItem
              onClick={() => dispatch(setProfileView(profileView.personalData))}
            >
              <StyledListItemHeaderText>Informacije</StyledListItemHeaderText>
            </MenuItem>
          ) : null}
        </StyledMenuList>
        <MenuItem onClick={() => navigate(usersRoute)}>
          <StyledListItemHeaderText>Korisnici</StyledListItemHeaderText>
        </MenuItem>
        {userRole.admin === role ? (
          <MenuItem onClick={() => navigate(tagsRoute)}>
            <StyledListItemHeaderText>Tagovi</StyledListItemHeaderText>
          </MenuItem>
        ) : null}
      </OptionsContainer>
      <ToggleContainer onClick={() => setHidden((prev) => !prev)}>
        <StyledArrow hidden={hidden} />
      </ToggleContainer>
    </SlidingContainer>
  );
};

export default SideNavBar;
