import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import meme from '../modules/postSlice';
import comment from '../modules/commentSlice';
import token from '../modules/tokenSlice';

const rootReducer = combineReducers({
  meme,
  comment,
  token,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
