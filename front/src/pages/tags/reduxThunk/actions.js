import {
  getAllTagsRepository,
  createTagRepository,
} from '../infrastructure/repository/tags';
import { setError, setLoading, setTags } from '../redux/slices';

export const loadTags = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const tags = await getAllTagsRepository();
    dispatch(setTags(tags));
  } catch (err) {
    dispatch(setError(err));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteTag = (tag) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    let DTO = {
      tag: tag,
    };

    // const result = await services.post(urls.deleteTag, DTO);
    // const { status } = result;

    // if (status === 'sucess') return true;
  } catch (err) {
    dispatch(setError(err));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addTag = (tag) => async (dispatch, getState) => {
  let DTO = {
    tag: tag,
  };

  try {
    dispatch(setLoading(true));
    const createdTag = await createTagRepository(DTO);

    const {
      tags: { tags: prevTags },
    } = getState();

    dispatch(setTags([...prevTags, createdTag]));
  } catch (err) {
    dispatch(setError(err));
  } finally {
    dispatch(setLoading(false));
  }
};
