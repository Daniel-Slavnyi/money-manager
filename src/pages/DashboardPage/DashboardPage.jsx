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
      <main>
        <Header />
        {/* <Container> */}
        <section>
          <Container>
            <Navigation />
            <Balance />
            <WrapCurency>
              <Currency />
            </WrapCurency>
          </Container>
        </section>
        <section>
          <Container>
            <Outlet />
          </Container>
        </section>
        {/* </Container> */}
      </main>
    </div>
  );
}