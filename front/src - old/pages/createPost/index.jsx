import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import classStyles from "./styles";
import Title from "./components/title";
import Type from "./components/type";
import FormTitle from "./components/formTitle";
import Paper from "@material-ui/core/Paper";
import FileUploader from "../../components/fileUploaderViewer";
import Controlls from "./components/controlls";
import TextArea from "./components/textArea";
import ImageUploader from "../../components/imageUploader";
import Tags from "./components/tags";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ErrorDialog from "../../components/errorDialog";
import Loader from "../../components/loader";
import { handleError } from "./redux/slices";
import { getAllTags } from "./reduxThunk/actions";
import { setDocuments } from "./redux/slices";
import { setImages } from "./redux/slices";

const CreatePost = () => {
  const classes = classStyles();
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.createPost);

  useEffect(() => {
    dispatch(getAllTags());
  }, [dispatch]);

  const viewToRender = (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          <FormTitle />
          <Type />
          <Paper className={classes.paper} elevation={0}>
            <Title />
            <TextArea />
            <ImageUploader setImages={setImages} />
            <FileUploader setDocuments={setDocuments} />
            <Tags />
            <Controlls />
          </Paper>
        </div>
      </div>
    </>
  );

  if (error) return <ErrorDialog error={error} handleError={handleError} />;
  else if (loading) return <Loader />;
  else return viewToRender;
};

export default CreatePost;
