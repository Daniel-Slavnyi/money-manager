import React from 'react';
import { Currency } from 'components/Currency/currency';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'globalStyles';
import { Header } from 'components/Header/Header';

export default function CurrencyPage() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <div style={{ display: 'flex' }}>
            <section>
              <Navigation />
              <Currency />
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}