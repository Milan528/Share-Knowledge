import React, { useState } from "react";
import classStyles from "./styles";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import Dialog from "../../../../components/dialog";
import { useDispatch } from "react-redux";
import { addPost } from "../../reduxThunk/actions";
import { homeRoute } from "../../../../router/routes";

const Controlls = (props) => {
  const classes = classStyles();
  const createPost = useSelector((state) => state.createPost);
  const { title, text } = createPost;
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (title === "") {
      setMessage("Niste uneli naslov.");
      return;
    }
    if (text === "") {
      setMessage("Niste uneli sadrzaj.");
      return;
    }

    const success = dispatch(addPost());
    if (success) {
      props.history.push(homeRoute);
    }
  };

  return (
    <div className={classes.container}>
      <Button onClick={onSubmit} className={classes.submit}>
        <Typography
          variant="button"
          color="inherit"
          className={classes.fontStyle}
        >
          Potvrdi
        </Typography>
      </Button>

      <Button
        onClick={() => props.history.push(homeRoute)}
        className={classes.cancel}
      >
        <Typography
          variant="button"
          color="inherit"
          className={classes.fontStyle}
        >
          Odustani
        </Typography>
      </Button>

      <Dialog message={message} clearMessage={setMessage} />
    </div>
  );
};

export default withRouter(Controlls);
