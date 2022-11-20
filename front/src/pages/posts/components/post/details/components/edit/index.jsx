import React from "react";
import classStyles from "./styles";
import Button from "@mui/material/Button";
import { withRouter } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const Post = (props) => {
  const classes = classStyles();
  // const { data } = props;

  const onClick = () => {
    console.log("go to edit post route");
    // props.history.push({
    //   pathname: editPostRoute,
    //   state: { data: data }
    // })
  };

  return (
    <Button onClick={onClick}>
      <EditIcon className={classes.date} />
    </Button>
  );
};

export default withRouter(Post);
