import Table from 'components/TransactionTable/TransactionTable';
import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Table />
    </>
  );
}
