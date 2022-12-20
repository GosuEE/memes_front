import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  comment: {
    id: '',
    content: '',
  },
  isLoading: false,
  error: null,
};

export const createComment = createAsyncThunk(
  'Comment/CREATE_COMMENT',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/comments', payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteComment = createAsyncThunk('meme/DELETE_COMMENTS', async (payload, thunkAPI) => {
  try {
    const response = await axios.delete(`http://localhost:3001/comments/${payload}`);
    console.log(response.data);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const readComments = createAsyncThunk('meme/READ_COMMENTS', async (payload, thunkAPI) => {
  try {
    const response = await axios.get(`http://localhost:3001/comments?memeId=${payload}`);
    console.log(response.data);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateComment = createAsyncThunk('meme/UPDATE_COMMENT', async (payload, thunkAPI) => {
  try {
    const response = await axios.patch(`http://localhost:3001/comments/${payload.id}`, {
      content: payload.content,
    });
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

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [createComment.pending]: (state) => {
      state.isLoading = true;
    },
    [createComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [createComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [readComments.pending]: (state) => {
      state.isLoading = true;
    },
    [readComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [readComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [updateComment.rejected]: (state, action) => {
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

export default commentSlice.reducer;
