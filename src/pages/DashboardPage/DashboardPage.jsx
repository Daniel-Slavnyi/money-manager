import { Header } from 'components/Header/Header';
import { Balance } from '../../components/Balance/Balance';
import { Currency } from 'components/Currency/currency';
import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { WrapCurency } from './DashboardPage.styled';

export default function DashboardPage() {
  return (
    <div>
      <Container>
        <Header />
        <main>
          <div style={{ display: 'flex' }}>
            <section>
              <Navigation />
              <Balance />
              <WrapCurency>
              <Currency />
            </WrapCurency>
            </section>
            <section>
              <Outlet />
            </section>
          </div>
        </main>
      </Container>
    </div>
  );
}
