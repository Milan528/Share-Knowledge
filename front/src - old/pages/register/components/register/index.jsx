import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Dialog from "../../../../components/dialog";
import { homeRoute } from "../../../../router/routes";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../reduxThunk/actions";

const Register = (props) => {
  const classes = classStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [dialogMessage, setDialogTitle] = useState("");
  const dispatch = useDispatch();

  const onClick = async () => {
    if (password !== passwordConfirm) {
      setDialogTitle("Sifre se razlikuju");
    } else {
      let success = await dispatch(register(username, password));
      if (success) props.history.push(homeRoute);
    }
  };

  return (
    <>
      <Typography variant="h4" className={classes.heading}>
        Registracija
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
          InputProps={{
            className: classes.input,
          }}
          fullWidth
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          placeholder="Potvrdi šifru"
          type="password"
          InputProps={{
            className: classes.input,
          }}
          fullWidth
          variant="outlined"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Button
          fullWidth
          size="large"
          className={classes.button}
          onClick={onClick}
        >
          Registruj me
        </Button>
      </Paper>
      <Dialog message={dialogMessage} clearMessage={setDialogTitle} />
    </>
  );
};

export default withRouter(Register);
