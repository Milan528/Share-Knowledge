export const initialState = {
  loadingTags: false,
};

const getState = () => {
  if (localStorage.getItem('tags') === null)
    localStorage.setItem('tags', JSON.stringify(initialState));

  return JSON.parse(localStorage.getItem('tags'));
};

export default getState();
