import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  memes: [],
  meme: {
    id: 0,
    title: '',
    img: '',
    answerValue: 0,
    exam1: '',
    exam2: '',
    exam3: '',
  },
  isLoading: false,
  error: null,
};

export const createMeme = createAsyncThunk('meme/CREATE_MEME', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3001/memes', payload);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const readMemes = createAsyncThunk('meme/READ_MEMES', async (payload, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:3001/memes');
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [createMeme.pending]: (state) => {
      state.isLoading = true;
    },
    [createMeme.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [createMeme.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [readMemes.pending]: (state) => {
      state.isLoading = true;
    },
    [readMemes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.memes = action.payload;
    },
    [readMemes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
