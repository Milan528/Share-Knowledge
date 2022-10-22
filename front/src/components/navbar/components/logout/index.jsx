import React from "react";
import classStyles from "./styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { clearUser } from "../../../../redux/app/slices";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts as updatePosts } from "../../../../pages/home/reduxThunk/actions";
import { homeRoute } from "../../../../router/routes";

export const Logout = (props) => {
  const classes = classStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearUser());
    dispatch(updatePosts());

    if (props.location.pathname !== homeRoute) props.history.push(homeRoute);
  };

  return (
    <Button className={classes.color} onClick={handleClick}>
      <Typography variant="subtitle2">Odjavljivanje</Typography>
    </Button>
  );
};

export default withRouter(Logout);
