import { Container } from '../../../src/globalStyles';
import { Header } from 'components/Header/Header';
import { Balance } from '../../components/Balance/Balance';
import { Currency } from 'components/Currency/currency';
import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div>
      <header></header>
      <main>
        <Container>
        <Header />
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
        </Container >
      </main>
    </div>
  );
}
