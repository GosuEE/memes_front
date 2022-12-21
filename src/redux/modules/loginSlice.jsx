import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { baseURL, instance } from '../../core/api/axios';

const initialState = {
  isLoading: false,
  error: null,
};

export const signUp = createAsyncThunk('login/SIGNUP', async (payload, thunkAPI) => {
  try {
    const response = await instance.post('/api/signup', payload);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const login = createAsyncThunk('login/LOGIN', async (payload, thunkAPI) => {
  try {
    const response = await instance.post('/api/login', payload);
    console.log(response.headers.authorization);
    return thunkAPI.fulfillWithValue(response.headers.authorization);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// API에 주소 없음

// export const checkDuplicationId = createAsyncThunk(
//   'login/CHECK_DUPLICATION_ID',
//   async (payload, thunkAPI) => {
//     try {
//       const response = await axios.post('http://localhost:3001/api/', payload);
//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

// export const checkDuplicationNickname = createAsyncThunk(
//   'login/CHECK_DUPLICATION_NICKNAME',
//   async (payload, thunkAPI) => {
//     try {
//       const response = await axios.post('http://localhost:3001/api/', payload);
//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      console.log('test signup');
      state.isLoading = false;
    },
    [signUp.rejected]: (state, action) => {
      console.log('test signup rejec');
      state.isLoading = false;
      state.error = action.payload;
    },

    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      const cookies = new Cookies();
      cookies.set('accessToken', action.payload, { path: '/' });
      console.log(cookies);
      state.isLoading = false;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
