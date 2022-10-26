import React from "react";
import Typography from "@material-ui/core/Typography";
import classStyles from "./styles";
import Spacer from "../../../../../../components/spacer";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Today from "@material-ui/icons/Today";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { postRoute } from "../../../../../../router/routes";

const Details = (props) => {
  const classes = classStyles();
  const { likes, postId, date } = props;

  const onClick = () => {
    props.history.push({
      pathname: postRoute,
      // search: 'query=abc',
      state: { postId: postId },
    });
  };

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
    <div className={classes.controlls}>
      <ThumbUpIcon />
      <Typography color="textSecondary" className={classes.like}>
        {" "}
        {likes}{" "}
      </Typography>
      <Today className={classes.date} />
      <Typography> {dateFormat(date)} </Typography>
      <Spacer />
      <Button
        size="small"
        className={classes.backgroundColor}
        onClick={onClick}
      >
        <Typography
          variant="button"
          color="inherit"
          className={classes.fontType}
        >
          Prikaži objavu
        </Typography>
      </Button>
    </div>
  );
};

export default withRouter(Details);
