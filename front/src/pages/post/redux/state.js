const initialState = {
  loading: false,
  error: null,
  post: null,
  files: [],
};

const getState = () => {
  if (localStorage.getItem('post')) {
    const state = JSON.parse(localStorage.getItem('post'));
    return state;
  } else return initialState;
};

export default getState();
