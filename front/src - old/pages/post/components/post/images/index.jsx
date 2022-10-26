import React from "react";
import classStyles from "./styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

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
