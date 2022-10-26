import { setPosts, setAllTags, setCurrentPageNumber, setPagesNumber } from "../redux/slices";
import * as services from "../../../services";
import * as urls from "./urls";
import { handleError, loading } from "../redux/slices";

export const getPostsAction = () => async (dispatch, getState) => {
  const {home, app} = getState()
  const { search, chosenTags, postsNumber, currentPageNumber} = home;
  const { role } = app;

  const DTO = {
    type: role,
    tags: chosenTags.map(tag => tag.id),
    search: search,
    postsNumber: postsNumber,
    currentPageNumber: currentPageNumber,
  }

  const result = await services.getURLParams(urls.getPosts, DTO)
  dispatch(setPosts(result.posts))
  dispatch(setCurrentPageNumber(result.currentPageNumber))
  dispatch(setPagesNumber(result.pagesNumber))
} 

export const getAllTagsAction = () => async (dispatch, getState) => {
  const tags = await services.get(urls.getTags)
  dispatch(setAllTags(tags))
} 

export const getPosts = () => async (dispatch, getState) => {
  try {
    dispatch(loading(true))
    await dispatch(getPostsAction())
  } 
  catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }
} 

export const loadPage = () => async (dispatch, getState) => {
  try {
    dispatch(loading(true))
    await dispatch(getAllTagsAction())
    await dispatch(getPostsAction())
  } 
  catch (err) {
    dispatch(handleError(err.message))
  }
  finally{
    dispatch(loading(false))
  }

} 