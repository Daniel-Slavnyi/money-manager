import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import RegisterPage from 'pages/RegisterPage';
import Layout from 'pages/Layout';
import LoginPage from 'pages/LoginPage';
import DashboardPage from 'pages/DashboardPage';
import HomePage from 'pages/HomePage';
import StatisticsPage from 'pages/StatisticsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Layout />}>
        <Route index element={<Navigate to="/auth/register" />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route path="/" element={<DashboardPage />}>
        <Route index element={<HomePage />} />
        <Route path="statistics" element={<StatisticsPage />} />
      </Route>
    </Routes>
  );
};
