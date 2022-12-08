export const orderEnum = {
  newest: 'newest',
  like: 'like',
  dislike: 'dislike',
};

export const initialState = {
  filtersVisibility: true,
  type: 'all',
  search: '',
  currentPage: 1,
  postPerPage: 5,
  totalNumberOfPages: null,
  totalNumberOfPosts: null,
  order: orderEnum.newest,
};

const getState = () => {
  if (localStorage.getItem('home')) {
    const state = JSON.parse(localStorage.getItem('home')).state;
    return state;
  } else return initialState;
};

export default getState();
