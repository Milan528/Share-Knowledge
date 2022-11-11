import React from 'react';
import logo from '../../assets/Logo.jpg';
import { StyledLogo, StyledNav, StyledHeader } from './styles';
import { useNavigate } from 'react-router';
import Authorized from './components/authorized';
import Unauthorized from './components/unauthorized';
import { homeRoute } from '../../app/router/routes';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo onClick={() => navigate(homeRoute)}>
          <img src={logo} alt="logo" />
          <span>ShareKnowledge</span>
        </StyledLogo>
        <Authorized />
        <Unauthorized />
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
