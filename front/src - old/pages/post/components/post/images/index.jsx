import React from "react";
import classStyles from "./styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Post = (props) => {
  const classes = classStyles();
  const { images } = props;

  return images.length === 0 ? null : (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2} rowHeight={300}>
        {images.map((image, index) => (
          <ImageListItem key={index}>
            <img src={image} alt={"loading..."} />
            <ImageListItemBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Post;
