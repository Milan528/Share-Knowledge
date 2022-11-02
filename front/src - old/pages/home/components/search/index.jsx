import React from "react";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../reduxThunk/actions";
import { setSearch } from "../../redux/slices";

const Search = () => {
  const classes = classStyles();
  const dispatch = useDispatch();

  const home = useSelector((state) => state.home);
  const { search } = home;

  const handleSearch = () => {
    dispatch(getPosts());
  };

  const onChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Pretraga"
        onChange={onChange}
        defaultValue={search}
      />
      <Button className={classes.searchButton} onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </Paper>
  );
};

export default Search;
