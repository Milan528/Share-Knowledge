const initialState = {
    posts: [],
    allTags: [],
    chosenTags: [],
    search: "",
    category: "",
    postsNumber: 5,
    pagesNumber: 1,
    currentPageNumber: 1,
    loading: true,
    error: null,
};

const getState = () => {
  if(localStorage.getItem("home") === null)
    localStorage.setItem("home", JSON.stringify(initialState))

  return JSON.parse(localStorage.getItem("home")) 
}

export default getState()