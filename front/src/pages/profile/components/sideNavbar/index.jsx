import React from 'react';
import {
  OptionsContainer,
  SlidingContainer,
  StyledArrow,
  StyledMenuList,
  ToggleContainer,
} from './styles';
import { StyledListItemHeaderText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileView, setSideNavbarHidden } from './redux/slices';
import { profileView } from './redux/state';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { tagsRoute, usersRoute } from '../../../../app/router/routes';
import { userRole } from '../../../../utils/enums';
import { Divider, MenuItem } from '@mui/material';

const SideNavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const usernameUrl = searchParams.get('username');
  const username = useSelector((state) => state.app.username);
  const role = useSelector((state) => state.app.role);
  const hidden = useSelector(
    (state) => state.profile.sideNavbar.sideNavbarHidden
  );

  return (
    <SlidingContainer hidden={hidden}>
      <OptionsContainer>
        Kontole
        <Divider />
        <StyledMenuList>
          <MenuItem onClick={() => dispatch(setProfileView(profileView.posts))}>
            <StyledListItemHeaderText>Objave</StyledListItemHeaderText>
          </MenuItem>
          {userRole.admin === role ? (
            <MenuItem
              onClick={() =>
                dispatch(setProfileView(profileView.reportedPosts))
              }
            >
              <StyledListItemHeaderText>
                Prijavljene objave
              </StyledListItemHeaderText>
            </MenuItem>
          ) : null}
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
      <ToggleContainer onClick={() => dispatch(setSideNavbarHidden(!hidden))}>
        <StyledArrow hidden={hidden} />
      </ToggleContainer>
    </SlidingContainer>
  );
};

export default SideNavBar;
