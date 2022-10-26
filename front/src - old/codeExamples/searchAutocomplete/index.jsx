import React, { useContext, useState, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import classStyles from "./styles";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Button from "@material-ui/core/Button";
import { Context } from "../../../../store";
import { SET_POSTS } from "../../../../store/actions";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Search = () => {
  const classes = classStyles();
  const { dispatch } = useContext(Context);
  const [numberOfChoices, setNumberOfChoices] = useState(0);
  const [choices, setChoices] = useState([]);

  const onChange = (e, value) => {
    setNumberOfChoices(value.length);
    setChoices(value);
  };

  const handleSearch = () => {
    dispatch({ type: SET_POSTS, payload: choices });
  };

  return (
    <Paper component="form" className={classes.root}>
      <Autocomplete
        multiple
        classes={{ root: classes.autocompleteWidth }}
        onChange={onChange}
        freeSolo
        options={numberOfChoices === 1 ? top5films : top100Films}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(option, { selected }) => (
          <Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </Fragment>
        )}
        renderInput={(params) => (
          <TextField {...params} placeholder="Pretraga" />
        )}
      />
      <Button
        className={classes.searchButton}
        disableRipple
        onClick={handleSearch}
      >
        <SearchIcon />
      </Button>
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
  );
};

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];

const top5films = [
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
];

export default Search;
