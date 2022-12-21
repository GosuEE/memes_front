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
      const response = await baseURL.post(`/api/meme/${payload.memeId}`, {
        comment: payload.content,
      });
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

export const readCommentsGetByMemeId = createAsyncThunk(
  'meme/READ_COMMENTS',
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const response = await baseURL.get(`/api/memecommentlist/${payload}`);
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateComment = createAsyncThunk('meme/UPDATE_COMMENT', async (payload, thunkAPI) => {
  try {
    const response = await baseURL.patch(`/api/memecomment/${payload.id}`, {
      comment: payload.content,
    });
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
    [readCommentsGetByMemeId.pending]: (state) => {
      state.isLoading = true;
    },
    [readCommentsGetByMemeId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [readCommentsGetByMemeId.rejected]: (state, action) => {
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
