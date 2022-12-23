export const profileView = {
  posts: 'posts',
  personalData: 'personalData',
};

export const initialState = {
  profileView: profileView.posts,
  sideNavbarHidden: false,
};

const getState = () => {
  if (localStorage.getItem('profile')) {
    const state = JSON.parse(localStorage.getItem('profile'));
    return state.sideNavbar;
  } else return initialState;
};

export default getState();
