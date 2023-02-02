import React from 'react';
import { Currency } from 'components/Currency/currency';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'globalStyles';
import { Header } from 'components/Header/Header';
import { styled } from '@mui/material';

const StyledMain = styled('main')(({ theme }) => ({
  paddingTop: '12px',
  flexGrow: 1,
  [theme.breakpoints.up('tablet')]: { paddingTop: '32px' },
  [theme.breakpoints.up('desktop')]: { paddingTop: '46px' },
}));

export default function CurrencyPage() {
  return (
    <div>
      <Header />
      <StyledMain>
        <Container>
          <div style={{ display: 'flex' }}>
            <section>
              <Navigation />
              <Currency />
            </section>
          </div>
        </Container>
      </StyledMain>
    </div>
  );
}
