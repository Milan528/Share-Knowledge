import rootReducer from "./rootReducer"
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store;



//__________________WITHOUT thunk__________________/
// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )


//__________________WITHOUT REDUX DEVTOOLS__________________/
// const store = createStore(notesReducer, applyMiddleware(thunk))