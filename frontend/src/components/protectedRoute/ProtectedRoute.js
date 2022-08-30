import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const login = useSelector((state) => state.user.login);
  return login ? children : <Navigate to={'/signin'} />;
};

export default ProtectedRoute;
