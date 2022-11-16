import {
  getAllPostsRepository,
  getAllSpecificPostsRepository,
} from '../repository/posts';
import { getAllTagsRepository } from '../repository/tags';
import {
  setAllTags,
  setLoading as setLoadingAllTags,
  setError as setErrorAllTags,
} from '../components/filters/components/tags/redux/slices';
import {
  setPosts,
  setLoading as loadingPosts,
  setError as setErrorPosts,
} from '../components/posts/redux/slices';
import { setLoading as loadingSearchBar } from '../components/filters/components/searchBar/redux/slices';
import { getSuggestionsRepository } from '../repository/searchBar';
import serialize from '../../../components/serialize';

export const loadPosts = () => async (dispatch, getState) => {
  try {
    dispatch(loadingPosts(true));
    const posts = await getAllPostsRepository();
    dispatch(setPosts(posts));
  } catch (err) {
    dispatch(setErrorPosts(serialize(err)));
  } finally {
    dispatch(loadingPosts(false));
  }
};

export const loadSpecificPosts = () => async (dispatch, getState) => {
  const {
    home: {
      tags: { selectedTags },
      searchBar: { selectedSuggestion },
      state: { type },
    },
  } = getState();

  let tagsId = selectedTags.map((tag) => tag.id);
  let dto = {
    tags: tagsId,
    startIndex: Number(0),
    count: 5,
    search: selectedSuggestion,
    type,
  };
  try {
    dispatch(loadingPosts(true));
    const posts = await getAllSpecificPostsRepository(dto);
    dispatch(setPosts(posts));
  } catch (err) {
    dispatch(setErrorPosts(serialize(err)));
  } finally {
    dispatch(loadingPosts(false));
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

export const loadSearchSuggestions =
  (searchText) => async (dispatch, getState) => {
    try {
      dispatch(loadingSearchBar(true));
      const suggestions = await getSuggestionsRepository(searchText);
      console.log(suggestions);
      // dispatch(setAllTags(tags));
    } catch (err) {
      // dispatch(setError(serialize(err)));
    } finally {
      // dispatch(loading(false));
    }
  };
