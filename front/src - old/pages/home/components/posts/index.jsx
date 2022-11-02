import React from "react";
import classStyles from "./styles";
import Post from "./post";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";

const Posts = () => {
  const classes = classStyles();

  const home = useSelector((state) => state.home);
  const { posts } = home;

  return (
    <div className={classes.container}>
      {posts.length > 0 ? (
        posts.map((data) => <Post key={data.id} data={data} />)
      ) : (
        <Fade in={true}>
          <Paper elevation={4} className={classes.paper}>
            <Typography variant="h5">
              {"Sadržaj još uvek nije kreiran!"}
            </Typography>
          </Paper>
        </Fade>
      )}
    </div>
  );
};

export default Posts;
