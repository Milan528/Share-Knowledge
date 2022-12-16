import React from 'react';
import { StyledNav, StyledHeader } from './styles';
import { useNavigate } from 'react-router';
import Authorized from './components/authorized';
import Unauthorized from './components/unauthorized';
import Logo from './components/logo';

export const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e.type);
    console.log(e.button);
    // () => navigate(homeRoute)
  };

  return (
    <StyledHeader>
      <StyledNav>
        <Logo />
        <Authorized />
        <Unauthorized />
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
