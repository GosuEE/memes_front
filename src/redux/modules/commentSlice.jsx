import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL, instance } from '../../core/api/axios';

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
      const response = await baseURL.post(
        `/api/meme/${payload.memeId}`,
        JSON.stringify({ comment: payload.content }),
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteComment = createAsyncThunk('meme/DELETE_COMMENTS', async (payload, thunkAPI) => {
  try {
    const response = await baseURL.delete(`/api/memecomment/${payload}`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const readComments = createAsyncThunk('meme/READ_COMMENTS', async (payload, thunkAPI) => {
  try {
    const response = await instance.get(`/comments?memeId=${payload}`);
    console.log(response.data);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateComment = createAsyncThunk('meme/UPDATE_COMMENT', async (payload, thunkAPI) => {
  try {
    const data = JSON.stringify({ comment: payload.content });
    const response = await instance.patch(`/api/memecomment/${payload.id}`, data);
    return thunkAPI.fulfillWithValue(response.data);
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
  },
});

export default commentSlice.reducer;
