import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import classStyles from "./styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setChosenTags } from "../../redux/slices";

const ChipsArray = () => {
  const classes = classStyles();
  const [tag, setTag] = useState("");
  const { allTags, chosenTags } = useSelector((state) => state.createPost);
  const dispatch = useDispatch();

  const onDelete = (value) => {
    dispatch(setChosenTags(chosenTags.filter((item) => item !== value)));
    setTag(null);
  };

  const onChange = (e, value) => {
    if (value !== null) {
      let exist = chosenTags.includes(value);
      if (!exist) {
        dispatch(setChosenTags([...chosenTags, value]));
      }
      setTag(value);
    } else {
      dispatch(setChosenTags(chosenTags.filter((item) => item !== tag)));
      setTag(value);
    }
  };

  return (
    <div className={classes.container}>
      <Autocomplete
        value={tag}
        onChange={onChange}
        options={allTags}
        getOptionLabel={(option) => (option === "" ? "" : option.tag)}
        style={{ width: 180 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Dodaj tag"
            size="small"
            variant="outlined"
          />
        )}
      />
      {chosenTags.map((tag) => (
        <Chip
          key={tag.id}
          label={tag.tag}
          onDelete={() => onDelete(tag)}
          className={classes.chip}
          classes={{ deleteIcon: classes.deleteIconColor }}
        />
      ))}
    </div>
  );
};
export default ChipsArray;
