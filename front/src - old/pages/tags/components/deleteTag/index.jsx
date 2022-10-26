import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import classStyles, { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "../../../../components/dialog";
import { getTags, deleteTag } from "../../reduxThunk/actions";
import { updateTags as updateTagsRedux } from "../../redux/slices";

export default function ComboBox() {
  const classes = classStyles();
  const [message, setMessage] = useState("");
  const [button, disableButton] = useState(true);
  const [tag, setTag] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state.tags);
  const { updateTags, tags } = state;

  useEffect(() => {
    //update tagova u pretrazi kad se doda nov tag u komponenti addTag
    if (updateTags === true) {
      dispatch(getTags());
      dispatch(updateTagsRedux(false));
    }
  }, [updateTags, dispatch]);

  const submit = () => {
    disableButton(true);
    const success = dispatch(deleteTag(tag));
    if (success) {
      setMessage("Uspešno ste obrisali tag");

      setTag("");
      dispatch(getTags()); //update tagova u pretrazi kad se obrise neki tag iz liste
    }
  };

  const onChange = (e, value) => {
    if (value == null) disableButton(true);
    else disableButton(false);

    setTag(value);
  };

  return (
    <Fragment>
      <Autocomplete
        value={tag}
        onChange={onChange}
        options={tags}
        getOptionLabel={(option) => (option === "" ? "" : option.tag)}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Pronadji tag" variant="outlined" />
        )}
      />
      <Button
        disabled={button}
        onClick={submit}
        className={classes.submit}
        style={styles.buttonColor(button)}
      >
        <Typography
          variant="button"
          color="inherit"
          className={classes.fontStyle}
        >
          Obrisi tag
        </Typography>
      </Button>
      <Dialog message={message} clearMessage={setMessage} />
    </Fragment>
  );
}
