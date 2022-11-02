import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { homeRoute } from "../../../../router/routes";
import { withRouter } from "react-router-dom";
import { login } from "../../reduxThunk/actions";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const classes = classStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onClick = async () => {
    let success = await dispatch(login(username, password));
    if (success) props.history.push(homeRoute);
  };

  return (
    <>
      <Typography variant="h4" className={classes.heading}>
        Prijavljivanje
      </Typography>
      <Paper className={classes.paper} elevation={0}>
        <TextField
          placeholder="Korisničko ime"
          autoComplete="username"
          InputProps={{
            className: classes.input,
          }}
          fullWidth
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          placeholder="Šifra"
          type="password"
          autoComplete="current-password"
          InputProps={{
            className: classes.input,
          }}
          fullWidth
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          size="large"
          className={classes.button}
          onClick={onClick}
        >
          Prijavi me
        </Button>
        {/* <Link href="#" className={classes.passwordChange} color="inherit" underline="always">Ne sećаš se lozinke?</Link> */}
      </Paper>
    </>
  );
};

export default withRouter(Login);
