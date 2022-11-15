export const initialState = {
  loading: false,
  error: null,
  updateTags: false,
  tags: [],
};

const getState = () => {
  if (localStorage.getItem('tags')) {
    const state = JSON.parse(localStorage.getItem('tags'));
    return state;
  } else return initialState;
};

export default getState();
