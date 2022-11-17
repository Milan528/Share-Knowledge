export const initialState = {};

const getState = () => {
  if (localStorage.getItem('home')) {
    const state = JSON.parse(localStorage.getItem('home')).state;
    return state;
  } else return initialState;
};

export default getState();
