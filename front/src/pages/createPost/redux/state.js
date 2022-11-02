const initialState = {
    title: "",
    text: "",
    type: "",
    likes: 50,
    chosenTags: [],
    images: [],
    documents: [],

    allTags: [],
    loading: false,
    error: null,
};

const getState = () => {
    return initialState
}

export default getState()