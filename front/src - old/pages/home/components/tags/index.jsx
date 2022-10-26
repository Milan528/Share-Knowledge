import React, { useState } from "react";
import classStyles from "./styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { setChosenTags } from "../../redux/slices";
import { useSelector, useDispatch } from "react-redux";
import Chip from "@material-ui/core/Chip";

const ChipsArray = () => {
  const classes = classStyles();
  const [selectedTag, setSelectedTag] = useState("");

  const home = useSelector((state) => state.home);
  const { allTags, chosenTags } = home;

  const dispatch = useDispatch();

  const onAutocompleteChange = (e, value) => {
    setSelectedTag(value);

    if (value !== null) {
      let exist = chosenTags.some((el) => el.id === value.id);

      if (!exist) dispatch(setChosenTags([...chosenTags, value]));
    } else {
      dispatch(
        setChosenTags(chosenTags.filter((item) => item !== selectedTag))
      );
    }
  };

  const onTagClose = (value) => {
    dispatch(setChosenTags(chosenTags.filter((item) => item !== value)));
    setSelectedTag(null);
  };

  return (
    <div className={classes.container}>
      <Autocomplete
        value={selectedTag}
        onChange={onAutocompleteChange}
        options={allTags}
        getOptionLabel={(option) => (option === "" ? "" : option.tag)}
        style={{ width: 180 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pronadji tag"
            size="small"
            variant="outlined"
          />
        )}
      />
      {chosenTags.map((chosenTag) => (
        <Chip
          key={chosenTag.id}
          label={chosenTag.tag}
          onDelete={() => onTagClose(chosenTag)}
          className={classes.chip}
          classes={{ deleteIcon: classes.deleteIconColor }}
        />
      ))}
    </div>
  );
};
export default ChipsArray;
