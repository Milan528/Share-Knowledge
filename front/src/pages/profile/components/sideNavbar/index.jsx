import React, { useState } from 'react';
import { SlidingContainer, StyledArrow, StyledMenuList } from './styles';
import { ToggleButton } from './styles';
import Divider from '@mui/material/Divider';
import { StyledListItemHeaderText, StyledMenuItem } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileView } from './redux/slices';
import { profileView } from './redux/state';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { tagsRoute, usersRoute } from '../../../../app/router/routes';
import { userRole } from '../../../../utils/enums';

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
      <ToggleButton onClick={() => setHidden((prev) => !prev)}>
        <StyledArrow hidden={hidden} />
      </ToggleButton>
      <Divider />
      <StyledMenuList>
        <StyledMenuItem
          onClick={() => dispatch(setProfileView(profileView.posts))}
          hidden={hidden}
        >
          <StyledListItemHeaderText>Objave</StyledListItemHeaderText>
        </StyledMenuItem>
        {usernameUrl === username ? (
          <StyledMenuItem
            onClick={() => dispatch(setProfileView(profileView.personalData))}
            hidden={hidden}
          >
            <StyledListItemHeaderText>Informacije</StyledListItemHeaderText>
          </StyledMenuItem>
        ) : null}
      </StyledMenuList>
      <StyledMenuItem onClick={() => navigate(usersRoute)} hidden={hidden}>
        <StyledListItemHeaderText>Korisnici</StyledListItemHeaderText>
      </StyledMenuItem>
      {userRole.admin === role ? (
        <StyledMenuItem onClick={() => navigate(tagsRoute)} hidden={hidden}>
          <StyledListItemHeaderText>Tagovi</StyledListItemHeaderText>
        </StyledMenuItem>
      ) : null}
    </SlidingContainer>
  );
};

export default SideNavBar;
