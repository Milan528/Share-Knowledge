import React from "react";
import classStyles from "./styles";
import Chip from "@material-ui/core/Chip";

const Tags = (props) => {
  const classes = classStyles();
  const { tags } = props;

  return (
    <div>
      {tags.map((tag, index) => (
        <Chip
          label={tag}
          variant="outlined"
          className={classes.tag}
          key={index}
        />
      ))}
    </div>
  );
};

export default Tags;
