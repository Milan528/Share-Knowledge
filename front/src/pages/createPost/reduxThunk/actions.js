import {
  setAllTags,
  setLoading as setLoadingAllTags,
  setError as setErrorAllTags,
} from '../components/form/components/tags/redux/slices';
import serialize from '../../../components/serialize';
import { getAllTagsRepository } from '../repository/tags';
import { currentDate } from '../../../components/date';
import axios from 'axios';
import { setLoading } from '../redux/slices';
import { createPostRepository } from '../repository/post';

export const addPost = (post) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));

    const response = await createPostRepository(post);
    console.log(response);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setLoading(false));
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
