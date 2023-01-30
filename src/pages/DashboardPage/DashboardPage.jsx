import { Balance } from '../../components/Balance/Balance';
import { Currency } from 'components/Currency/currency';
import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <main>
        <div style={{ display: 'flex' }}>
          <section>
            <Navigation />
            <Balance />
            <Currency />
          </section>

          <section>
            <Outlet />
          </section>
        </div>
      </main>
    </div>
  );
}
