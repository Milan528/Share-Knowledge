import React from "react";
import logo from "../../assets/Logo.jpg"
import { StyledLogo, StyledNav, StyledHeader } from "./styles"; 
import { useNavigate } from "react-router";
import {homeRoute, loginRoute, registerRoute} from "../../app/router/routes"

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo onClick={() => navigate(homeRoute)}>
            <img src={logo} alt="logo"/>
            <span>ShareKnowledge</span>
        </StyledLogo>
        <ul>
          <li>
          <div onClick={() => navigate(registerRoute)}>
            Registracija
          </div>
          </li>
          <li>
          <div onClick={() => navigate(loginRoute)}>
            Prijava
          </div>
          </li>
        </ul>
     </StyledNav>
    </StyledHeader>
    
  );
};

export default Navbar;
