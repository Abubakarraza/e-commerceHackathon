import React from 'react';
import Card from '../components/productCard/Card';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import Navbar from '../components/navbar/Navbar';
import ProductScreen from '../components/productScreen/ProductScreen';
import Footer from '../components/footer/Footer';
import CartScreen from '../components/cart/CartScreen';
import SignIn from '../components/signin/SignIn';
import ShippingAddressUi from '../components/shippingAddressUi/ShippingAddressUi';
import SignUp from '../components/signUp/SignUp';
import PaymentMethodScreen from '../components/paymentMethodScreen/PaymentMethodScreen';
import PlaceOrder from '../components/placeOrder/PlaceOrder';
import ProtectedRoute from '../components/protectedRoute/ProtectedRoute';
import AdminProtectedRoute from '../components/adminProtected/AdminProtectedRoute';
import DashboardScreen from '../components/dashboard/DashboardScreen';
import Profile from '../components/profile/Profile';
import ContactUs from '../components/contact/ContactUs';

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:_id" element={<ProductScreen />}></Route>
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartScreen />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/dashboard" element={<DashboardScreen />}></Route>
        <Route path="/shipping" element={<ShippingAddressUi />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/paymentMethod" element={<PaymentMethodScreen />}></Route>
        <Route path="/placeOrder" element={<PlaceOrder />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
