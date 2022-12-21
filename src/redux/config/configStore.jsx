import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import meme from '../modules/postSlice';
import comment from '../modules/commentSlice';
import login from '../modules/loginSlice';

const rootReducer = combineReducers({
  meme,
  comment,
  login,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
