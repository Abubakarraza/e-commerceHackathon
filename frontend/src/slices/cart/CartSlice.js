import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  carts: [],
  loading: false,
  error: '',
  message: '',
  rejectRequest: false,
};
export const addToCart = createAsyncThunk('createCart', async (body) => {
  const response = await fetch('/createCart', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
});
export const getCart = createAsyncThunk('getCart', async () => {
  const response = await fetch('/getCart', {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});
export const incrementQuantity = createAsyncThunk('increment', async (_id) => {
  console.log(_id);
  const response = await fetch(`/updateCart/increment/${_id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});
export const decrementQuantity = createAsyncThunk('increment', async (_id) => {
  console.log(_id);
  const response = await fetch(`/updateCart/decrement/${_id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});
export const deleteCart = createAsyncThunk('deleteCart', async (_id) => {
  const response = await fetch(`/deleteCart/${_id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});
const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addToCartItem: (state, action) => {
    //   const newItem = action.payload;
    //   const existItem = state.carts.find((item) => item._id === newItem._id);
    //   const cartItem = existItem
    //     ? state.carts.map((item) =>
    //         item._id === existItem._id ? newItem : item
    //       )
    //     : [...state.carts, action.payload];
    //   localStorage.setItem('cartItem', JSON.stringify(cartItem));
    //   return {
    //     ...state,
    //     carts: cartItem,
    //   };
    // },
    // delToCart: (state, action) => {
    //   const itemInCart = state.carts.cartItem.find(
    //     (item) => item._id === action.payload._id
    //   );
    //   if (itemInCart) {
    //     itemInCart.quantity--;
    //   }
    // },
    // delCart: (state, action) => {
    //   const DelCart = state.carts.cartItem.filter(
    //     (item) => item._id !== action.payload
    //   );
    //   return {
    //     ...state,
    //     carts: {
    //       ...state.carts,
    //       cartItem: DelCart,
    //     },
    //   };
    // },
  },
  extraReducers: {
    [addToCart.pending]: (state, action) => {
      state.loading = true;
    },
    [addToCart.fulfilled]: (state, action) => {
      // state.loading = false;
      // console.log(action.payload.message);
      // state.rejectRequest = false;
      let cart;
      if (action.payload.message) {
        cart = [...state.carts, action.payload.message];
        // console.log('🚀 ~ file: CartSlice.js ~ line 117 ~ cart', cart);
        return {
          ...state,
          carts: cart,
          loading: false,
        };
        // return {
        //   ...state,
        //   carts: [...state.carts, action.payload.message],
        // };
        // state.carts.push(action.payload.message);
      } else {
        return {
          ...state,
          error: action.payload.error,
          loading: false,
        };
      }

      // const ncart = [...state.carts, action.payload.message];
      // return {
      //   ...state,
      //   carts: ncart,
      //   loading: false,
      // };
    },
    [addToCart.rejected]: (state, action) => {
      state.rejectRequest = true;
    },
    [deleteCart.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteCart.fulfilled]: (state, action) => {
      if (action.payload.message) {
        const deleteItem = state.carts.filter(
          (item) => item._id !== action.payload.message
        );
        return {
          ...state,
          carts: deleteItem,
          loading: false,
        };
      } else if (action.payload.error) {
        state.error = action.payload.error;
      }
    },
    [deleteCart.rejected]: (state, action) => {
      state.rejectRequest = true;
    },
    [incrementQuantity.pending]: (state, action) => {
      state.loading = true;
    },
    [incrementQuantity.fulfilled]: (state, action) => {
      // state.loading = true;
      if (action.payload.message) {
        const updateCart = state.carts.map((item) => {
          if (item._id === action.payload.message) {
            return action.payload.message;
          } else {
            return item;
          }
        });
        return {
          ...state,
          carts: updateCart,
          loading: false,
        };
      } else if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error,
          loading: false,
        };
      }
    },
    [incrementQuantity.rejected]: (state, action) => {
      state.rejectRequest = true;
    },
    [decrementQuantity.pending]: (state, action) => {
      // state.loading = true;
    },
    [decrementQuantity.fulfilled]: (state, action) => {
      // state.loading = true;
      if (action.payload.message) {
        const updateCart = state.carts.map((item) => {
          if (item._id === action.payload.message) {
            return action.payload.message;
          } else {
            return item;
          }
        });
        return {
          ...state,
          carts: updateCart,
          loading: false,
        };
      } else if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error,
          loading: false,
        };
      }
    },
    [decrementQuantity.rejected]: (state, action) => {
      state.rejectRequest = true;
    },
    [getCart.pending]: (state, action) => {
      state.loading = true;
    },
    [getCart.fulfilled]: (state, action) => {
      if (action.payload.message) {
        return {
          ...state,
          carts: action.payload.message,
          loading: false,
        };
      }
      if (action.payload.error) {
        return {
          ...state,
          error: action.payload.error,
          loading: false,
        };
      }
      // state.loading = false;
      // state.rejectRequest = false;
      // console.log(action.payload.message);
      // return {
      //   ...state,
      //   carts: action.payload.message,
      //   loading: false,
      // };
      // // if (action.payload.message) {
      //   return {
      //     ...state,
      //     carts: data,
      //   };
      // }

      // if (action.payload.message) {
      //   state.carts.push(action.payload.message);
      // } else if (action.payload.error) {
      //   state.error = action.payload.error;
      // }
    },
    [getCart.rejected]: (state, action) => {
      state.rejectRequest = true;
    },
  },
});
export const { addToCartItem } = CartSlice.actions;
export default CartSlice.reducer;
// export const { addToCart, delToCart, delCart } = CartSlice.actions;
