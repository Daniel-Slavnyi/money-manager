import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div>
      <header></header>
      <main>
        <section>
          <Navigation />
        </section>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
