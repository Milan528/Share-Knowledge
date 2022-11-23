import {
  setAllTags,
  setLoading as setLoadingAllTags,
  setError as setErrorAllTags,
} from '../components/form/components/tags/redux/slices';
import serialize from '../../../components/serialize';
import { getAllTagsRepository } from '../repository/tags';
import { currentDate } from '../../../components/date';
import axios from 'axios';

export const addPost = (images) => async (dispatch, getState) => {
  try {
    // dispatch(loading(true));

    // const { createPost } = getState();
    // const { title, text, type, likes, chosenTags, images, documents } =
    //   createPost;

    // let DTO = {
    //   title: title, //   title: "Ovo je naslov.",
    //   text: text, //   text: "Ovo je sadrzaj",
    //   type: type, //   type: "clan",
    //   likes: likes, //   likes: 50,
    //   date: currentDate, //   date: currentDate,
    //   tags: chosenTags, //   tags: [{id: 8, tag: "darjan"}, {id: 14, tag: "sada"}]
    // };

    // const posts = await services.post(urls.addPost, DTO);
    // const { postId } = posts;

    // for (const image of images) {
    //   let formData = new FormData();
    //   formData.append('file', image);
    // }
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`files${index}`, image);
    });
    formData.append('postId', 1);
    console.log(formData);

    const res = await axios.post(
      'http://localhost:4000/upload/post',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          console.log(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },

        // for (const document of documents) {
        //   let formData = new FormData();
        //   formData.append('file', document);
        //   formData.append('postId', postId);
        //   await services.postFile(urls.uploadFile, formData);
        // }
      }
    );
  } catch (err) {
    console.log(err);
  } finally {
    // dispatch(loading(false));
  }
};

export const loadTags = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingAllTags(true));
    const tags = await getAllTagsRepository();
    dispatch(setAllTags(tags));
  } catch (err) {
    dispatch(setErrorAllTags(serialize(err)));
  } finally {
    dispatch(setLoadingAllTags(false));
  }
};
