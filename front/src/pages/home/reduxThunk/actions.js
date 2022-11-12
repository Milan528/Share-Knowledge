import {
  getAllPostsRepository,
  getAllSpecificPostsRepository,
} from '../infrastructure/repository/posts';
import { getAllTagsRepository } from '../infrastructure/repository/tags';
import { setAllTags } from '../components/filters/components/tags/redux/slices';
import {
  setPosts,
  setLoading as loadingPosts,
  setError as setErrorPosts,
} from '../components/posts/redux/slices';
import { setLoading as loadingSearchBar } from '../components/filters/components/searchBar/redux/slices';
import { getSuggestionsRepository } from '../infrastructure/repository/searchBar';

export const loadPosts = () => async (dispatch, getState) => {
  try {
    dispatch(loadingPosts(true));
    const posts = await getAllPostsRepository();
    dispatch(setPosts(posts));
  } catch (err) {
    dispatch(
      setErrorPosts(JSON.stringify(err, Object.getOwnPropertyNames(err)))
    );
  } finally {
    dispatch(loadingPosts(false));
  }
};

export const loadSpecificPosts = () => async (dispatch, getState) => {
  const {
    home: {
      tags: { selectedTags },
      search,
    },
  } = getState();
  let tagsId = selectedTags.map((tag) => tag.id);
  let dto = {
    tags: tagsId,
    startIndex: Number(0),
    count: 5,
  };
  try {
    dispatch(loadingPosts(true));
    const posts = await getAllSpecificPostsRepository(dto);
    dispatch(setPosts(posts));
  } catch (err) {
    dispatch(
      setErrorPosts(JSON.stringify(err, Object.getOwnPropertyNames(err)))
    );
  } finally {
    dispatch(loadingPosts(false));
  }
};

export const loadTags = () => async (dispatch, getState) => {
  try {
    // dispatch(loading(true));
    const tags = await getAllTagsRepository();
    dispatch(setAllTags(tags));
  } catch (err) {
    // dispatch(setError(JSON.stringify(err, Object.getOwnPropertyNames(err))));
  } finally {
    // dispatch(loading(false));
  }
};

export const loadSearchSuggestions =
  (searchText) => async (dispatch, getState) => {
    try {
      dispatch(loadingSearchBar(true));
      const suggestions = await getSuggestionsRepository(searchText);
      console.log(suggestions);
      // dispatch(setAllTags(tags));
    } catch (err) {
      // dispatch(setError(JSON.stringify(err, Object.getOwnPropertyNames(err))));
    } finally {
      // dispatch(loading(false));
    }
  };
