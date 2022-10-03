import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';
import { ROUTE_CONSTANTS } from '../../utils/appConstants';
import Login from '../../components/Login/Login';
import Dashboard from '../../components/Layout/Dashboard/Dashboard';

const RouteHandler = () => (
  <Routes>
    <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
    <Route path={ROUTE_CONSTANTS.ROOT} element={<ProtectedRoutes />}>
      {/* <Route path={ROUTE_CONSTANTS.ROOT} element={<Dashboard />} /> */}
      <Route path={ROUTE_CONSTANTS.DASHBOARD} element={<Dashboard />} />
    </Route>
  </Routes>
);

export default RouteHandler;
