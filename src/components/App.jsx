import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { refreshUser } from '../redux/auth/auth-operation';
import { Loader } from './Loader/Loader';

import Layout from 'pages/Layout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

import LoginPage from 'pages/LoginPage/LoginPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import HomePage from 'pages/HomePage/HomePage';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';

// const Layout = lazy(() => import('pages/Layout'));

// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
// const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const StatisticsPage = lazy(() =>
//   import('pages/StatisticsPage/StatisticsPage')
// );
// const CurrencyPage = lazy(() => import('pages/CurrencyPage/CurrencyPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
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
              <Route path="/home" element={<HomePage />} />
              <Route path="/statistic" element={<StatisticsPage />} />
            </Route>
            <Route>
              <Route path="/currency" element={<CurrencyPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
      {isLoading && <Loader />}
    </>
  );
};
