import React from 'react';
import { Outlet } from 'react-router-dom';
import { BlurWrapper } from './LoginPage/LoginPage.styled';

export default function Layout() {
  return (
    <main>
      <BlurWrapper />
      <Outlet />
    </main>
  );
}
