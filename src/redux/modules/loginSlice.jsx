import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const initialState = {
  isLoading: false,
  error: null,
};

export const signUp = createAsyncThunk('login/SIGNUP', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3001/api/signup', payload);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const login = createAsyncThunk('login/LOGIN', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3001/api/login', payload);
    return thunkAPI.fulfillWithValue(response.data);
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
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      const [cookies, setCookie, removeCookie] = useCookies();
      state.isLoading = false;
      setCookie('accessToken', action.payload, { path: '/' });
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
