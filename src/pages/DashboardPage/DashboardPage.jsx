import { Header } from 'components/Header/Header';
import { Balance } from '../../components/Balance/Balance';
import { Currency } from 'components/Currency/currency';
import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <div style={{ display: 'flex' }}>
            <section>
              <Container>
                <Navigation />
                <Balance />
                <Currency />
              </Container>
            </section>
            <section>
              <Outlet />
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}
