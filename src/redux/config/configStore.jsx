import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import meme from '../modules/postSlice';
import comment from '../modules/commentSlice';

const rootReducer = combineReducers({
  meme,
  comment,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
