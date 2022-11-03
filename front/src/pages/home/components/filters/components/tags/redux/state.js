export const initialState = {
  loading: false,
  error: null,
  selectedTags: [],
  allTags: [],
};

const getState = () => {
  // if (localStorage.getItem('tags') === null)
  //   localStorage.setItem('tags', JSON.stringify(initialState));

  // console.log(JSON.parse(localStorage.getItem('tags')));

  // return JSON.parse(localStorage.getItem('tags'));

  return initialState;
};

export default getState();
