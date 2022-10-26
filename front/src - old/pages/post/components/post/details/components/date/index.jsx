import React from "react";
import Typography from "@material-ui/core/Typography";
import classStyles from "./styles";
import Today from "@material-ui/icons/Today";
import { withRouter } from "react-router-dom";

const Post = (props) => {
  const classes = classStyles();
  const { date } = props;

  const dateFormat = (date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let d = date.split("-");
    let formatedDate = d[0] + "." + (months.indexOf(d[1]) + 1) + "." + d[2];

    return formatedDate;
  };

  return (
    <div className={classes.date}>
      <Today />
      <Typography> {dateFormat(date)} </Typography>
    </div>
  );
};

export default withRouter(Post);
