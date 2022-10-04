import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { ROUTE_CONSTANTS } from '../../utils/appConstants';

const ProtectedRoutes = () => {
  const location = useLocation();
  const { isAuth } = useSelector((state) => state.user);
  return isAuth ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={ROUTE_CONSTANTS.LOGIN} state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
