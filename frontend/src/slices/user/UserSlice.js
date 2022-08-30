import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  loading: false,
  userDetail: {},
  login: false,
  message: '',
  error: '',
};
export const signUpUser = createAsyncThunk('signup', async (body) => {
  const response = await fetch('/signup', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await response.json();
});
export const signInUser = createAsyncThunk('signin', async (body) => {
  const response = await fetch('/signin', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  return await response.json();
});
export const logoutUser = createAsyncThunk('logout', async () => {
  const response = await fetch('/logout', {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return await response.json();
});
export const getUser = createAsyncThunk('getUser', async () => {
  const response = await fetch('/getData', {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return await response.json();
});
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, action) => {
      // state.loading = false;
      if (action.payload.message) {
        // state.message = action.payload.message;
        return {
          ...state,
          message: action.payload.message,
          loading: false,
          error: '',
        };
      }
      if (action.payload.error) {
        return {
          ...state,
          message: '',
          loading: false,
          error: action.payload.error,
        };
      }
    },
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, action) => {
      //  state.loading = false;
      if (action.payload.message) {
        // state.login = true;
        return {
          ...state,
          loading: false,
          login: true,
        };
      }
      if (action.payload.error) {
        return {
          ...state,
          loading: false,
          login: false,
          error: action.payload.error,
        };
      }
    },
    [logoutUser.pending]: (state, action) => {
      state.loading = true;
    },
    [logoutUser.fulfilled]: (state, action) => {
      // state.loading = false;
      // let value;
      if (action.payload.status === 200) {
        return {
          ...state,
          loading: false,
          login: false,
        };
      } else {
        return {
          ...state,
          loading: false,
          login: true,
        };
      }
      // return {
      //   ...state,
      //   login: value,
      // };
    },
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.message) {
        state.login = true;
        state.userDetail = action.payload.message;
      }
      if (action.payload.error) {
        state.login = false;
        state.error = action.payload.error;
      }
    },
  },
});
export default userSlice.reducer;
