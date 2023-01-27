import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import RegisterPage from 'pages/RegisterPage';
import Layout from 'pages/Layout';
import LoginPage from 'pages/LoginPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import HomePage from 'pages/HomePage/HomePage';
import StatisticsPage from 'pages/StatisticsPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/auth-operation';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/auth" element={<Layout />}>
          <Route index element={<Navigate to="/auth/register" />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<HomePage />} />
          <Route path="statistics" element={<StatisticsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
