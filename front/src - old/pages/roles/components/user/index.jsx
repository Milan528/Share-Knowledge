import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import classStyles from './styles';
import { setUser, clearUser } from "../../redux/slices";
import { useSelector, useDispatch } from "react-redux";

export default function ComboBox() {
  // const classes = classStyles();
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.roles);

  const onChange = (e, user) => {
    if (user == null) {
      dispatch(clearUser());
    } else {
      dispatch(setUser({ username: user.username, role: user.role }));
    }
  };

  return (
    <Autocomplete
      onChange={onChange}
      options={allUsers}
      getOptionLabel={(option) => (option.length === 0 ? "" : option.username)}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Korisnicko ime" variant="outlined" />
      )}
    />
  );
}
