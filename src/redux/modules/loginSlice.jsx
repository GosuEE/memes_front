import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../core/api/axios';

const initialState = {
  duplicate: {
    idDuplicate: true,
    nickDuplicate: true,
  },
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
    const response = await instance.post('/api/login', {
      username: payload.username,
      password: payload.password,
    });
    payload.setCookie('accessToken', response.headers.authorization, { path: '/' });
    return thunkAPI.fulfillWithValue(response.headers.authorization);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const checkDuplicationId = createAsyncThunk(
  'login/CHECK_DUPLICATION_ID',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get(`/api/signup-idcheck/${payload}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const checkDuplicationNickname = createAsyncThunk(
  'login/CHECK_DUPLICATION_NICKNAME',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get(`/api/signup-nicknamecheck/${payload}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearDuplicate: (state) => ({
      ...state,
      duplicate: { idDuplicate: true, nickDuplicate: true },
    }),
    clearIdDuplicate: (state) => ({
      ...state,
      duplicate: { idDuplicate: true, nickDuplicate: state.duplicate.nickDuplicate },
    }),
    clearNickDuplicate: (state) => ({
      ...state,
      duplicate: {
        idDuplicate: state.duplicate.idDuplicate,
        nickDuplicate: true,
      },
    }),
  },
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
      // const cookies = new Cookies();
      // cookies.set('accessToken', action.payload, { path: '/' });
      state.isLoading = false;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [checkDuplicationId.pending]: (state) => {
      state.isLoading = true;
    },
    [checkDuplicationId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.duplicate.idDuplicate = action.payload;
    },
    [checkDuplicationId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [checkDuplicationNickname.pending]: (state) => {
      state.isLoading = true;
    },
    [checkDuplicationNickname.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.duplicate.nickDuplicate = action.payload;
    },
    [checkDuplicationNickname.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearDuplicate, clearIdDuplicate, clearNickDuplicate } = loginSlice.actions;
export default loginSlice.reducer;
