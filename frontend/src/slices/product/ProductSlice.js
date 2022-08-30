import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  loading: false,
  allProducts: [],
  product: {},
  error: '',
};
export const getAllProduct = createAsyncThunk('allProduct', async () => {
  const response = await fetch('/product', {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
});
export const getProduct = createAsyncThunk('product', async (_id) => {
  console.log(_id, 'id');
  const res = await fetch(`/products/${_id}`, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const datas = await res.json();
  return datas;
});
// export const getAllProduct = createAsyncThunk('allProducts', async () => {
//   const data = await fetch('/api/product', {
//     method: 'get',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });
//   const datas = await data.json();
//   console.log(datas);
//   return datas;
// });
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProduct.pending]: (state, action) => {
      //console.log('hell');
      state.loading = true;
    },
    [getAllProduct.fulfilled]: (state, action) => {
      return {
        ...state,
        allProducts: action.payload.message,
        loading: false,
      };
    },
    [getAllProduct.rejected]: (state, action) => {
      state.error = 'Something is Wrongs';
      state.loading = false;
    },
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      return {
        ...state,
        product: action.payload.message,
        loading: false,
      };
    },
  },
});
export default productSlice.reducer;
