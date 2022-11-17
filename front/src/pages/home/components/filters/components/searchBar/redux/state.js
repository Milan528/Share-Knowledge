export const initialState = {
  loading: false,
  error: null,
  suggestions: [],
  selectedSuggestion: null,
};

const getState = () => {
  if (localStorage.getItem('home')) {
    const state = JSON.parse(localStorage.getItem('home'));
    return state.searchBar;
  } else return initialState;
};

export default getState();
