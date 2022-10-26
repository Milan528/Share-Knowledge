import React, { useEffect } from "react";
import classStyles from "./styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import { setType } from "../../redux/slices";

const Type = () => {
  const classes = classStyles();
  const [role, setRole] = React.useState("pitanje");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setRole(value);
  };

  useEffect(() => {
    dispatch(setType(role));
  }, [role, dispatch]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Tip</InputLabel>
      <Select value={role} onChange={handleChange}>
        {/* <MenuItem value={10}>Pitanje</MenuItem>
            <MenuItem value={20}>Materijal</MenuItem> */}
        <MenuItem value={"pitanje"}>Pitanje</MenuItem>
        <MenuItem value={"materijal"}>Materijal</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Type;
