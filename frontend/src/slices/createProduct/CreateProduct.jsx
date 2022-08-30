import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const newProduct = createAsyncThunk('newProduct', async (data) => {
  const response = await fetch('/product/createProduct', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res;
});
const initialState = {
  loading: false,
};
const CreateProduct = createSlice({
  name: 'createProduct',
  initialState,
  reducers: {},
  extraReducers: {
    [newProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [newProduct.fulfilled]: (state, action) => {
      state.loading = false;
    },
  },
});
export default CreateProduct.reducer;
