import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { homeRoute } from "../../../../router/routes";
// import { login } from "../../reduxThunk/actions";
import { useDispatch } from "react-redux";
import {FormContainer, FormHeading, StyledPaper, StyledLink, StyledButton } from "./styles"

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onClick = async () => {
    // let success = await dispatch(login(username, password));
    // if (success) props.history.push(homeRoute); //ovo treba da se cita iz redux-a, ne odavde
  };

  return (
    <FormContainer>
      <FormHeading variant="h4">
        Prijavljivanje
      </FormHeading>
      <StyledPaper elevation={0}>
        <TextField
          placeholder="Korisničko ime"
          autoComplete="username"
          fullWidth
          margin="normal" 
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
          <TextField
          placeholder="Šifra"
          type="password"
          autoComplete="current-password"
          margin="normal" 
          fullWidth
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />

        <StyledButton  
          fullWidth
          variant="outlined"
          size="large"
          onClick={onClick}
          >
          Prijavi me
        </StyledButton>
        <StyledLink href="#" color="inherit" underline="always">Ne sećаš se lozinke?</StyledLink> 
      </StyledPaper> 
    </FormContainer>
  );
};

export default Form;
