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
import { useSearchParams } from 'react-router-dom';
import { userRole } from '../../../../utils/enums';
import { Divider, MenuItem } from '@mui/material';
import { useRef } from 'react';

const SideNavBar = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const usernameUrl = searchParams.get('username');
  const username = useSelector((state) => state.app.username);
  const role = useSelector((state) => state.app.role);
  const hidden = useSelector(
    (state) => state.profile.sideNavbar.sideNavbarHidden
  );
  const optionsContainerRef = useRef(null);

  return (
    <SlidingContainer
      widthToHide={
        hidden && optionsContainerRef.current
          ? optionsContainerRef.current.offsetWidth
          : '0'
      }
    >
      <OptionsContainer ref={optionsContainerRef}>
        Profil
        <Divider />
        <StyledMenuList>
          <MenuItem onClick={() => dispatch(setProfileView(profileView.posts))}>
            <StyledListItemHeaderText>Objave</StyledListItemHeaderText>
          </MenuItem>

          {usernameUrl === username || role === userRole.admin ? (
            <MenuItem
              onClick={() => dispatch(setProfileView(profileView.personalData))}
            >
              <StyledListItemHeaderText>Informacije</StyledListItemHeaderText>
            </MenuItem>
          ) : null}
        </StyledMenuList>
        {userRole.admin === role ? (
          <>
            <Divider />
            Admin
            <StyledMenuList>
              <MenuItem
                onClick={() =>
                  dispatch(setProfileView(profileView.reportedPosts))
                }
              >
                <StyledListItemHeaderText>
                  Prijavljene objave
                </StyledListItemHeaderText>
              </MenuItem>
              <MenuItem
                onClick={() =>
                  dispatch(setProfileView(profileView.reportedComments))
                }
              >
                <StyledListItemHeaderText>
                  Prijavljeni komentari
                </StyledListItemHeaderText>
              </MenuItem>
            </StyledMenuList>
          </>
        ) : null}
      </OptionsContainer>
      <ToggleContainer onClick={() => dispatch(setSideNavbarHidden(!hidden))}>
        <StyledArrow hidden={hidden} />
      </ToggleContainer>
    </SlidingContainer>
  );
};

export default SideNavBar;
