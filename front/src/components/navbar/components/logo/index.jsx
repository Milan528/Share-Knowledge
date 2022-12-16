import React, { useState } from 'react';
import logo from '../../../../assets/Logo.jpg';
import {
  ContextMenuContainerDiv,
  LogoContainerDiv,
  StyledContextMenu,
  StyledLogo,
} from './styles';
import { useNavigate } from 'react-router';
import { homeRoute } from '../../../../app/router/routes';
import { useEffect } from 'react';

// export const Logo = () => {
//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     console.log(e.type);
//     console.log(e.button);
//     //
//   };

//   return (
//     <StyledLogo onClick={handleClick} onContextMenu={handleClick}>
//       <img src={logo} alt="logo" />
//       <span>ShareKnowledge</span>
//     </StyledLogo>
//   );
// };

// export default Logo;

const buttons = {
  left: 0,
  middle: 1,
  right: 2,
  back: 3,
  forward: 4,
};

export const Logo = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [newTab, setNewTab] = useState(false);

  // https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleChange = (e) => {
    if (e.button === buttons.left) {
      navigate(homeRoute);
    } else if (e.button === buttons.middle) {
      openInNewTab(homeRoute);
    } else if (e.button === buttons.right) {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      setMenuVisible(true);
      console.log('right');
    } else if (e.button === buttons.back) {
      console.log('back');
    } else if (e.button === buttons.forward) {
      console.log('forward');
    }
  };

  const handleOpenInNewTab = () => {
    setMenuVisible(false);
    setNewTab(true);
  };

  useEffect(() => {
    if (newTab) {
      openInNewTab(homeRoute);
    }
  }, [newTab]);

  return (
    <>
      <StyledLogo
        onMouseDown={handleChange}
        onContextMenu={(e) => e.preventDefault()}
      >
        <img src={logo} alt="logo" />
        <span>ShareKnowledge</span>
      </StyledLogo>
      {menuVisible ? (
        <ContextMenuContainerDiv
          onMouseLeave={() => setMenuVisible(false)}
          onContextMenu={(e) => e.preventDefault()}
          mouseX={mouseX}
          mouseY={mouseY}
        >
          <li onClick={handleOpenInNewTab}>Open in new tab</li>
        </ContextMenuContainerDiv>
      ) : null}
    </>
  );
};

export default Logo;
