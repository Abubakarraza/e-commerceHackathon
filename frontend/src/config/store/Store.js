import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../../slices/cart/CartSlice';
import CreateProduct from '../../slices/createProduct/CreateProduct';
import ProductSlice from '../../slices/product/ProductSlice';
import UserSlice from '../../slices/user/UserSlice';
const Store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: CartSlice,
    user: UserSlice,
    createProduct: CreateProduct,
  },
});
export default Store;
