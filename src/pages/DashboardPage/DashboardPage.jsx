import { Navigation } from 'components/Navigation/Navigation';
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
