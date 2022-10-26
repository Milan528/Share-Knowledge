const initialState = {
    loading: false,
    error: null,
    post: null,
    documents: [],
    postOwner: false,
};

const getState = () => {
    return initialState
}

export default getState()