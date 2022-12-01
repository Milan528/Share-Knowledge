export const initialState = {
  filtersVisibility: true,
  type: 'all',
  search: '',
};

const getState = () => {
  if (localStorage.getItem('home')) {
    const state = JSON.parse(localStorage.getItem('home')).state;
    return state;
  } else return initialState;
};

export default getState();
