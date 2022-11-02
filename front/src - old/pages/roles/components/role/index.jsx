import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import classStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { setRole as setRoleRedux } from "../../redux/slices";

export default function SimpleSelect() {
  const classes = classStyles();
  const [role, setRole] = useState("");
  const roles = useSelector((state) => state.roles);
  const { username, role: stateRole } = roles;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setRole(event.target.value);
    dispatch(setRoleRedux(event.target.value));
  };

  useEffect(() => {
    if (stateRole != null) {
      setRole(stateRole);
    }
  }, [stateRole]);

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      disabled={username == null ? true : false}
    >
      <InputLabel id="demo-simple-select-outlined-label">Rola</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={role}
        onChange={handleChange}
        label="Rola"
      >
        <MenuItem value="posetilac">Posetilac</MenuItem>
        <MenuItem value="clan">Član</MenuItem>
        <MenuItem value="moderator">Moderator</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
      </Select>
    </FormControl>
  );
}
