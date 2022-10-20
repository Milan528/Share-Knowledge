const initialState = {
  loading: false,
  posts: [],
};

const getState = () => {
  if (localStorage.getItem("home") === null)
    localStorage.setItem("home", JSON.stringify(initialState));

  return JSON.parse(localStorage.getItem("home"));
};

export default getState();
