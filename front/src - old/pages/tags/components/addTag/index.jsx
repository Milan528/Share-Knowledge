import React, { useState } from "react";
import classStyles from "./styles";
import TextField from "@mui/material/TextField";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "../../../../components/dialog";
import { useDispatch } from "react-redux";
import { addTag } from "../../reduxThunk/actions";
import { updateTags } from "../../redux/slices";

export default function SimpleSelect() {
  const classes = classStyles();
  const [tag, setTag] = React.useState("");
  const [button, disableButton] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const submit = () => {
    disableButton(true);

    const success = dispatch(addTag(tag));

    if (success) {
      setMessage("Uspešno ste dodali tag");
      dispatch(updateTags(true));
      disableButton(false);
    }

    setTag("");
  };
  return (
    <Fragment>
      <TextField
        value={tag}
        onChange={handleChange}
        label="Unesite tag"
        variant="outlined"
      />
      <Button disabled={button} onClick={submit} className={classes.submit}>
        <Typography
          variant="button"
          color="inherit"
          className={classes.fontStyle}
        >
          Dodaj tag
        </Typography>
      </Button>
      <Dialog message={message} clearMessage={setMessage} />
    </Fragment>
  );
}
