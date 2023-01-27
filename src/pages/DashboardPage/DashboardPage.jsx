import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function DashboardPage() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <nav>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </nav>
        <Outlet />
      </main>
    </div>
  );
}
