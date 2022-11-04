import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { homeRoute } from "../../../../router/routes";
// import { login } from "../../reduxThunk/actions";
import { useDispatch } from "react-redux";
import {FormContainer, FormHeading, StyledPaper, StyledButton } from "./styles"

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [dialogMessage, setDialogTitle] = useState("");
  const dispatch = useDispatch();

  const onClick = async () => {
    // if (password !== passwordConfirm) {
    //   setDialogTitle("Sifre se razlikuju");
    // } else {
    //   let success = await dispatch(register(username, password));
    //   if (success) props.history.push(homeRoute);
    // }
  };

  return (
    <FormContainer>
      <FormHeading variant="h4">
        Registracija
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
        <TextField
          placeholder="Potvrdi šifru"
          margin="normal" 
          type="password"
          fullWidth
          variant="outlined"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <StyledButton  
          fullWidth
          variant="outlined"
          size="large"
          onClick={onClick}
          >
          Registruj me
        </StyledButton>
      </StyledPaper> 
    </FormContainer>
  );
};

export default Form;
