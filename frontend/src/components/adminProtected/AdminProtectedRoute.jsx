import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUser } from '../../slices/user/UserSlice';

const AdminProtectedRoute = ({ children }) => {
  const login = useSelector((state) => state.user.login);
  const admin = useSelector((state) => state.user.userDetail.isAdmin);
  console.log(login);
  console.log(admin);
  return login && admin ? children : <Navigate to={'/signin'} />;
};

export default AdminProtectedRoute;
