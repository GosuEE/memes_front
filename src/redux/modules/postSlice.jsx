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

export const updateMemes = createAsyncThunk('meme/UPDATE_MEMES', async (payload, thunkAPI) => {
  try {
    const response = await axios.patch(`http://localhost:3001/memes/${payload.id}`, {
      title: payload.title,
      img: payload.img,
      answerValue: payload.answerValue,
      exam1: payload.exam1,
      exam2: payload.exam2,
      exam3: payload.exam3,
    });
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteMemes = createAsyncThunk('meme/DELETE_MEMES', async (payload, thunkAPI) => {
  try {
    const response = await axios.delete(`http://localhost:3001/memes/${payload}`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getMemeById = createAsyncThunk('meme/GET_MEME_BY_ID', async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`http://localhost:3001/memes/${payload}`);
    return thunkAPI.fulfillWithValue(data.data);
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

    [updateMemes.pending]: (state) => {
      state.isLoading = true;
    },
    [updateMemes.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [updateMemes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteMemes.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteMemes.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteMemes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getMemeById.pending]: (state) => {
      state.isLoading = true;
    },
    [getMemeById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.meme = action.payload;
    },
    [getMemeById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
