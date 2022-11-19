const initialState = {
  loading: false,
  error: null,
  user: null,
  role: null,
  allUsers: [],
};

const getState = () => {
  if (localStorage.getItem('users')) {
    const state = JSON.parse(localStorage.getItem('users'));
    return state;
  } else return initialState;
};

export default getState();
