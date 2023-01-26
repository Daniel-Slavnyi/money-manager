import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div>
      <header></header>
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
