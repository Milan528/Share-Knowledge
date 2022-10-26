import React from "react";
import classStyles from "./styles";
import Chip from "@material-ui/core/Chip";

const Tags = (props) => {
  const classes = classStyles();
  const { tags } = props;

  return (
    <div className={classes.container}>
      {tags.map((tag) => (
        <Chip
          label={tag.tag}
          variant="outlined"
          key={tag.id}
          className={classes.tag}
        />
      ))}
    </div>
  );
};

export default Tags;
