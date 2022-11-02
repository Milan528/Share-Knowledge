import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk was added as middleware
// - The Redux DevTools Extension is disabled for production
// Check -> https://redux-toolkit.js.org/api/configureStore
