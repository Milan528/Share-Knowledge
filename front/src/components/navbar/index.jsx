import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/Logo.jpg"
import { StyledLogo } from "./styles"; 

export const Navbar = () => {
  const app = useSelector((state) => state.app);

  return (
    <header>
      <nav>
        <StyledLogo>
          <img src={logo} />
          <p>ShareKnowledge</p>
      </StyledLogo>
      
     </nav>
    </header>
    
  );
};

export default Navbar;
